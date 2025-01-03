import { MenuItemType } from '@/app/core/models'
import { Component } from '@angular/core'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { RouterModule } from '@angular/router'
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StickyHeaderComponent, LogoBoxComponent, RouterModule, NgbAlert],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
      url: '/contact',
      icon: 'fa-solid fa-envelope',
    },
  ]
}
