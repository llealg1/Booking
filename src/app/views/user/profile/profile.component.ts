import { Component } from '@angular/core'
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component'
import { UpdatePasswordComponent } from './component/update-password/update-password.component'
import { PersonalInfoComponent } from './component/personal-info/personal-info.component'
import { EmergencyContactComponent } from './component/emergency-contact/emergency-contact.component'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProgressBarComponent,
    UpdatePasswordComponent,
    PersonalInfoComponent,
    EmergencyContactComponent,
  ],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {}
