import { User } from '@/app/core/models'
import { ThemeModeService } from '@/app/core/services/theme-mode.service'
import { logout } from '@/app/store/authentication/authentication.actions'
import { getUser } from '@/app/store/authentication/authentication.selector'
import { Component, inject, Input, OnInit, Renderer2 } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AuthenticationService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, NgbTooltipModule, RouterLink],
  templateUrl: './profile-dropdown.component.html',
  styles: ``,
})
export class ProfileDropdownComponent implements OnInit {
  @Input() showThemeToggler: boolean = true
  @Input() className: string = ''
  user$: Observable<User | null> = inject(Store).select(getUser);
  user: User | null = null;
  theme: string = 'light';

  public themeModeService = inject(ThemeModeService)

  constructor(private store: Store, private authenticationService: AuthenticationService) {
    this.user$.subscribe((user) => {
      this.user = user
    })
  }


  ngOnInit() {}

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.theme = mode
    this.themeModeService.updateTheme(mode)
  }

  onLogout() {

    this.authenticationService.logout().subscribe(() => {})
  }
}
