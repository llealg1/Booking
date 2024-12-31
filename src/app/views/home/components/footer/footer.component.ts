import { credits, currentYear } from '@/app/store'
import { footerLinks, topLinks } from '@/assets/data/footer-items'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'home-footer',
  standalone: true,
  imports: [RouterModule,CommonModule,NgbTooltipModule, NgbCollapseModule],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  topLinks = topLinks
  currentYear = currentYear
  footerLinks = footerLinks
  creditsBy = credits

  countries = [
    {
      name: 'Venezuela',
      description: 'Arcadia Venezuela: Viaja feliz, Viaja Arcadia.',
      image: 'assets/images/logosArcadia/venezuela.jpg',
      link: 'https://www.instagram.com/arcadia.viajes/',
    },
    {
      name: 'España',
      description: 'Arcadia España: Viajamos contigo por el mundo.',
      image: 'assets/images/logosArcadia/spain.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.es/',
    },
    {
      name: 'Argentina',
      description: 'Arcadia Argentina: Potenciando tus ideas con pasión.',
      image: 'assets/images/logosArcadia/argentina.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.arg/',
    },
    {
      name: 'Colombia',
      description: 'Arcadia Colombia: Innovación que transforma vidas.',
      image: 'assets/images/logosArcadia/colombia.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.co/',
    },
    {
      name: 'Chile',
      description: 'Arcadia Chile: Creando conexiones que importan.',
      image: 'assets/images/logosArcadia/chile.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.cl/',
    },
    {
      name: 'Perú',
      description: 'Arcadia Perú: Innovación al alcance de todos.',
      image: 'assets/images/logosArcadia/peru.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.pe/',
    },
    {
      name: 'Ecuador',
      description: 'Arcadia Ecuador: Inspirando el cambio que necesitamos.',
      image: 'assets/images/logosArcadia/ecuador.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.ec/',
    },
    {
      name: 'EE.UU',
      description: 'Arcadia USA: Tecnología y futuro en tus manos.',
      image: 'assets/images/logosArcadia/eeuu.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.usa/',
    },
    {
      name: 'Panamá',
      description: 'Arcadia Panamá: El viaje de tus sueños.',
      image: 'assets/images/logosArcadia/panama.jpg',
      link: 'https://www.instagram.com/arcadiaviajes.pa/',
    },
  ];

  getOfficesTooltip(offices: any[]): string {
    return offices.map(office => `${office.name}: ${office.address}`).join('\n');
  }
}
