import { MenuItemType, User } from '@/app/core/models'
import { Component, Input, OnInit } from '@angular/core'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { RouterModule } from '@angular/router'
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap'
import { HeaderHorizontalComponent } from './header-horizontal/header-horizontal.component'
import { HeaderVerticalComponent } from './header-vertical/header-vertical.component'
import { VerticalMenuButtonComponent } from './header-vertical/vertical-menu-button.component'
import { Store } from '@ngrx/store'
import { AuthenticationState } from '@/app/store/authentication/authentication.reducer'
import { Observable } from 'rxjs'
import { getisLoggedIn, getUser } from '@/app/store/authentication/authentication.selector'
import { ProfileDropdownComponent } from "../../../../components/top-bar/profile-dropdown/profile-dropdown.component";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    LogoBoxComponent,
    RouterModule,
    NgbAlert,
    HeaderHorizontalComponent,
    HeaderVerticalComponent,
    VerticalMenuButtonComponent,
    ProfileDropdownComponent,
    CommonModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() showExtraPages?: boolean
  @Input() showContactPages?: boolean
  @Input() startBookingMenu?: boolean
  @Input() menuClassName?: string
  promoCasheaAlert = true
  homeMenuItems: MenuItemType[] = [
    {
      key: 'inicio',
      label: 'Inicio',
      url: '/',
      icon: 'fa-solid fa-home',
    },
    {
      key: 'promociones',
      label: 'Promociones',
      url: '/promotions',
      icon: 'fa-solid fa-gift',
    },
    {
      key: 'empresa',
      label: 'Empresa',
      url: '/business',
      icon: 'fa-solid fa-building',
      children: [
        {
          key: 'business',
          label: 'Empresa',
          url: '/business',
        },
        {
          key: 'asesores',
          label: 'Asesores',
          url: '/advisors',
        },
      ],
    },
    {
      key: 'Planificador',
      label: 'Planificador',
      url: '/destiny',
      icon: 'fa-solid fa-map-marker',
    },
    {
      key: 'faq',
      label: 'FAQ',
      url: '/faq',
      icon: 'fa-solid fa-question-circle',
    },
    {
      key: 'contacto',
      label: 'Contacto',
      url: '/contact',
      icon: 'fa-solid fa-envelope',
    },
  ]


  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AuthenticationState>) {
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getisLoggedIn);
  }

  ngOnInit() {

  }
}
