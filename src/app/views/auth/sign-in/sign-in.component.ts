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
import { RouterModule } from '@angular/router'
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

  public fb = inject(UntypedFormBuilder)
  store = inject(Store)

  constructor(private authService: AuthenticationService) {
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
    if (this.signinForm.valid) {
      const username = this.form['username'].value // Get the username from the form
      const password = this.form['password'].value // Get the password from the form

      this.authService.login(username, password).subscribe({
        next: (user) => {
          // Login successful
          // Save the user in the store
          this.store.dispatch(login({ username: username, password: password }))
        },
        error: (error) => {
          // Login failed
          // Show the error message
          console.error('Error:', error)
        },
      })

      // Login Api
      // this.store.dispatch(login({ username: username, password: password }))
    }
  }

  changeType() {
    this.passwordType = !this.passwordType
  }
}
