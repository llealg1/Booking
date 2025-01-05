import { Component, OnInit } from '@angular/core'
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component'
import { UpdatePasswordComponent } from './component/update-password/update-password.component'
import { PersonalInfoComponent } from './component/personal-info/personal-info.component'
import { EmergencyContactComponent } from './component/emergency-contact/emergency-contact.component'
import { AuthenticationService } from '../../../core/services/auth.service';

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
export class ProfileComponent implements OnInit {
  constructor(private authenticationService:AuthenticationService) {}
  dataPersonalInfo:any;
  ngOnInit(): void {
    this.authenticationService.authMe().subscribe((data) => {
      console.log('Data personal info: ');
      console.log(data);
      this.dataPersonalInfo = data;
    })
  }
}
