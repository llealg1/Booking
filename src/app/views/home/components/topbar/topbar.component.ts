import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { VerticalMenuButtonComponent } from '@/app/components/app-menu/components/vertical-menu-button.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { ThemeSwitcherComponent } from '@/app/components/top-bar/theme-switcher/them-switcher.component'
import { MenuItemType } from '@/app/core/models'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'about-topbar',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    LogoBoxComponent,
    VerticalMenuButtonComponent,
    AppMenuComponent,
    ThemeSwitcherComponent,
    NgbDropdownModule,
    RouterModule,
  ],
  templateUrl: './topbar.component.html',
  styles: `
    :host(help-navbar) {
      display: contents;
    }
  `,
})
export class TopbarComponent {
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
    },
    {
      key: 'destino',
      label: 'Destino',
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
      url: '/contacto',
      icon: 'fa-solid fa-envelope',
    },
  ]
}
