import { Component, OnInit } from '@angular/core'
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component'
import { UpdatePasswordComponent } from './component/update-password/update-password.component'
import { PersonalInfoComponent } from './component/personal-info/personal-info.component'
// import { EmergencyContactComponent } from './component/emergency-contact/emergency-contact.component'
// import { AuthenticationService } from '../../../core/services/auth.service';
import { CountryService } from '../../../core/services/country.service';
import { Store } from '@ngrx/store'
import { User } from '@/app/core/models'
import { map, Observable } from 'rxjs'
import { getUser } from '@/app/store/authentication/authentication.selector'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProgressBarComponent,
    UpdatePasswordComponent,
    PersonalInfoComponent,
    // EmergencyContactComponent,
  ],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent implements OnInit {
  dataPersonalInfo:any
  // user$: Observable<User | null>
  countrys: any = []
  constructor(private countryService:CountryService, private store: Store) {
    this.store.select(getUser).subscribe((user) => {
      this.dataPersonalInfo = user
    })
  }
  ngOnInit(): void {
    this.countryService.getCountry().subscribe((res: any) => {
      this.countrys = res.data;
    })

  }
}
