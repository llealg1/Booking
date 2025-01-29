import { AuthenticationService } from '@/app/core/services/auth.service'
import { credits, currentYear } from '@/app/store'
import { login, loginSuccess, logout } from '@/app/store/authentication/authentication.actions'
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
      this.authService.deleteToken();
      this.store.dispatch(logout());
      this.authService.login(username, password).subscribe({
        next: async(user) => {

          this.successMessage = 'Inicio de sesión exitoso'
          this.loading = false
          this.store.dispatch(login({ username: username, password: password }));
          let resUserData = await this.authService.authMe();
          this.store.dispatch(loginSuccess({ user: resUserData }));
          this.router.navigate(['/user/profile'])

        },
        error: (error) => {
          this.errorMessage = 'Error al iniciar sesión, Verifique sus credenciales'
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
