import { Component } from '@angular/core'
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component'
import { UpdateEmailComponent } from './component/update-email/update-email.component'
import { UpdatePasswordComponent } from './component/update-password/update-password.component'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProgressBarComponent,
    UpdateEmailComponent,
    UpdatePasswordComponent,
  ],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {}
