import { Component, OnInit } from '@angular/core'
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component'
import { UpdatePasswordComponent } from './component/update-password/update-password.component'
import { PersonalInfoComponent } from './component/personal-info/personal-info.component'
import { EmergencyContactComponent } from './component/emergency-contact/emergency-contact.component'
import { AuthenticationService } from '../../../core/services/auth.service';
import { CountryService } from '../../../core/services/country.service';

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
  dataPersonalInfo:any
  countrys: any = []
  constructor(private authenticationService:AuthenticationService, private countryService:CountryService) {}
  ngOnInit(): void {
    this.authenticationService.authMe().subscribe((data) => {
      this.dataPersonalInfo = data
    })

    this.countryService.getCountry().subscribe((data: any) => {
      this.countrys = data.data;
    })
  }
}
