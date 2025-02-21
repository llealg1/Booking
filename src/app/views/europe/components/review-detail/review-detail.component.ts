import { Component } from '@angular/core'
import {
  NgbCollapseModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'

const logo = 'assets/images/logosArcadia/venezuela.jpg'

@Component({
  selector: 'reviews-review-detail',
  standalone: true,
  imports: [NgbCollapseModule, NgbPaginationModule, NgbModule],
  templateUrl: './review-detail.component.html',
  styles: ``,
})
export class ReviewDetailComponent {
  userReviewsData = [
    {
      name: 'Sthephany Izarra',
      time: 'hace 2 dias',
      avatar: logo,
      reviewOn: '1 opinión 6 fotos',
      description:
        'Excelente atención, y asesoramiento por medio de la Agencia ARCADIA para poder tener una experiencia única en nuestro viaje Caracas-Madrid, 👉 Asesor CARMELO MEDINA recomendado al 100% Gracias por tu excelente atencion, disponibilidad, transparencia para hacernos llegar felices a nuestro destino...',
      rating: 4,
      images: [logo],
      reply: true,
    },
    {
      name: 'Ysacleidi Duran Landinez',
      time: 'Ene 18, 2025 at 11:55 am',
      avatar: logo,
      reviewOn: '1 opinión 17 fotos',
      description:
        'Le he comprado boleto a Varios miembros  de mi familia  con esta agencia  y siempre ha sido un excelente acesoramiento en todo momento con Johan . Y gracias a eso siempre han tenido un viaje seguro y placentero. Muchisimas gracias Yohan Pereira',
      rating: 4,
    },
    {
      name: 'yenifer Rodriguez',
      time: 'Ene 11, 2025 at 3:00 pm',
      avatar: logo,
      reviewOn: '1 opinión 1 foto',
      description:
        'Muy agradecida con la atención de Pierina Gonzalez, excelente servicio y excelente atención. 100% recomendable. #Madrid 🇪🇦',
      rating: 4,
    },
    {
      name: 'Dennis Barrett',
      time: 'Ene 9, 2025 at 1:00 pm',
      avatar: logo,
      reviewOn: '3 opiniones 2 fotos',
      description:
        'Súper agradecido con mi asesora y más q mi asesora hizo en mi una amistad tanto con su profesionalismo logró hacerme sentir seguro y dejar todo en sus manos , atención y orden es como catálogo a mi asesora GÉNESIS ÁLVAREZ  que siempre le agradeceré su tiempo y la paciencia que me tuvo 🥹💯',
      rating: 4,
    },
  ]
  isCollapsed: boolean = false
}
