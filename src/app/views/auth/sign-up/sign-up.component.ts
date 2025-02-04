import { AuthenticationService } from '@/app/core/services/auth.service'
import { credits, currentYear } from '@/app/store'
import { CommonModule, DatePipe } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type AbstractControl,
  type UntypedFormGroup,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { CountryService } from '../../../core/services/country.service'
import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
@Component({
  selector: 'auth-sign-up',
  standalone: true,
  providers: [DatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DateFormInputDirective,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styles: `
    :host(auth-sign-up) {
      display: contents;
      .pakepasswordicon {
        display: none;
      }
    }
  `,
})
export class SignUpComponent implements OnInit {
  creditsBy = credits
  currentYear = currentYear
  fieldTextType!: boolean
  fieldTextType1!: boolean
  confirmPwd: string = ''
  public fb = inject(UntypedFormBuilder)
  signupForm: UntypedFormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      passport: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      identityCard: ['', [Validators.required]],
      child: [false, [Validators.required]],
      birthDate: ['', [Validators.required]],
      address: this.fb.group({
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        street: ['', [Validators.required]],
      }),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      // recaptcha: ['', Validators.required],
    },
  )
  submitted: boolean = false
  loading: boolean = false
  successMessage: string = ''
  errorMessage: string = ''
  countrys: any = []

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private countryService: CountryService,
  ) {}

  ngOnInit(): void {
    this.countryService.getCountry().subscribe((data: any) => {
      // console.log(data)
      this.countrys = data.data
    })
  }

  public validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.password === c.value.confirmpwd ? null : { notSame: true }
  }

  changetype() {
    this.fieldTextType = !this.fieldTextType
  }

  get form() {
    return this.signupForm.controls
  }

  resolvedCaptcha(captchaResponse: any) {
    // console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  onChangeConfirmPwd(event: any) {
    // console.log(event.target.value);
    this.confirmPwd = event.target.value
  }
  onSubmit() {
    this.submitted = true
    this.loading = true
    this.successMessage = ''
    this.errorMessage = ''

    // Convertir la fecha al formato adecuado


    const password = this.signupForm.value.password;

    if (password !==  this.confirmPwd) {
      this.loading = false;
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    } else {

    }

    const birthDate = this.signupForm.value.birthDate;
    if(birthDate) {
      const [day, month, year] = birthDate.split('/');
      const formattedDate = `${year}-${month}-${day}`;

      this.signupForm.patchValue({
        birthDate: formattedDate,
      });
    }

    this.authService.signup(this.signupForm.value).subscribe({
      next: (data) => {
        this.successMessage = 'Usuario registrado correctamente'
        this.loading = false
        setTimeout(() => {
          this.router.navigate(['/auth/sign-in'])
        }, 500) // Navegar después de 2 segundos
      },
      error: (error) => {
        this.signupForm.patchValue({
          birthDate: birthDate,
        })
        this.errorMessage = 'Error al registrar el usuario'
        this.loading = false
      },
    })
  }
}
