import { AuthenticationService } from '@/app/core/services/auth.service'
import { credits, currentYear } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type AbstractControl,
  type UntypedFormGroup,
} from '@angular/forms'
import { Router,RouterModule } from '@angular/router'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Component({
  selector: 'auth-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styles: `
    :host(auth-sign-up) {
      display: contents;
    }
  `,
})
export class SignUpComponent {
  creditsBy = credits
  currentYear = currentYear
  fieldTextType!: boolean
  fieldTextType1!: boolean
  signupForm!: UntypedFormGroup
  submitted: boolean = false
  loading: boolean = false
  successMessage: string = ''
  errorMessage: string = ''

  public fb = inject(UntypedFormBuilder)

  constructor(private authService: AuthenticationService, private router: Router) {
    this.signupForm = this.fb.group(
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
        // confirmpwd: ['', [Validators.required]],
      },
      { validators: this.validateAreEqual }
    )
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

  onSubmit() {
    this.submitted = true
    this.loading = true
    this.successMessage = ''
    this.errorMessage = ''

    this.authService.signup(this.signupForm.value).subscribe({
      next: (data) => {
        this.successMessage = 'User registered successfully'
        this.loading = false
        setTimeout(() => {
          this.router.navigate(['/auth/sign-in'])
        }, 500) // Navegar después de 2 segundos
      },
      error: (error) => {
        this.errorMessage = 'Error registering user'
        this.loading = false
      },
    })
  }


}
