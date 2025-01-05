import { AuthenticationService } from '@/app/core/services/auth.service'
import { credits, currentYear } from '@/app/store'
import { login } from '@/app/store/authentication/authentication.actions'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
@Component({
  selector: 'auth-sign-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styles: `
    :host(auth-sign-in) {
      display: contents;
    }
  `,
})
export class SignInComponent {
  creditsBy = credits
  currentYear = currentYear
  signinForm!: UntypedFormGroup
  submitted: boolean = false
  passwordType: boolean = true
  loading: boolean = false
  successMessage: string = ''
  errorMessage: string = ''

  public fb = inject(UntypedFormBuilder)
  store = inject(Store)

  constructor(private authService: AuthenticationService, private router: Router) {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  get form() {
    return this.signinForm.controls
  }

  onLogin() {
    this.submitted = true
    this.loading = true
    this.successMessage = ''
    this.errorMessage = ''

    if (this.signinForm.valid) {
      const username = this.form['username'].value
      const password = this.form['password'].value

      this.authService.login(username, password).subscribe({
        next: (user) => {
          this.successMessage = 'Login successful'
          this.loading = false
          this.store.dispatch(login({ username: username, password: password }));
          this.router.navigate(['/user'])

        },
        error: (error) => {
          this.errorMessage = 'Error logging in'
          this.loading = false
        },
      })
    } else {
      this.loading = false
    }
  }

  changeType() {
    this.passwordType = !this.passwordType
  }
}
