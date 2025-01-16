import { ThemeModeService } from '@/app/core/services/theme-mode.service'
import { logout } from '@/app/store/authentication/authentication.actions'
import { Component, inject, Input, OnInit, Renderer2 } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store'

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

  theme: string = 'light'

  public themeModeService = inject(ThemeModeService)

  constructor(private store: Store) {}

  ngOnInit() {}

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.theme = mode
    this.themeModeService.updateTheme(mode)
  }

  onLogout() {
    this.store.dispatch(logout())
  }
}
