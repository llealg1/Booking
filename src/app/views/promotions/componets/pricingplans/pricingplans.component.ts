import { Component } from '@angular/core'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'

type PricingType = {
  planName: string
  monthlyPrice: number
  yearlyPrice: number
  exit: string
  icon: string
  tag: string
  feature: {
    name: string
    icon2: string
    available?: boolean
  }[]
}

type FAQType = {
  title: string
  description: string
}

@Component({
  selector: 'pricing-plans',
  standalone: true,
  imports: [NgbTooltipModule, CommonModule],
  templateUrl: './pricingplans.component.html',
  styles: ``,
})
export class PricingplansComponent {
  paymentType = false

  changePaymentType(ev: any) {
    this.paymentType = ev.target.checked
  }
  pricingPlans: PricingType[] = [
    {
      planName: 'Caracas',
      monthlyPrice: 680,
      yearlyPrice: 570,
      exit: 'Salida desde Buenos Aires',
      icon: 'bi bi-lightning-charge-fill h5 lh-1',
      tag: 'Most Popular',
      feature: [
        {
          name: 'Vuelo Directo',
          icon2: 'bi bi-airplane-fill',
          available: true,
        },
        {
          name: 'Reserva de Boleto',
          icon2: 'bi bi-pass-fill',
          available: true,
        },
        {
          name: 'Equipaje de Mano',
          icon2: 'bi bi-backpack2-fill',
          available: true,
        },
        {
          name: 'Equipaje de 23 Kg',
          icon2: 'bi bi-luggage-fill',
          available: true,
        },
        {
          name: 'Asesoria Personalizada',
          icon2: 'bi bi-person-hearts',
          available: true,
        },
        {
          name: 'Seguro de Viaje',
          icon2: 'bi bi-clipboard-plus-fill',
          available: false,
        },
        {
          name: 'Reserva de Hotel',
          icon2: 'bi bi-building-fill',
          available: false,
        },
      ],
    },
    {
      planName: 'Madrid',
      monthlyPrice: 700,
      yearlyPrice: 840,
      exit: 'salida de Caracas',
      icon: 'bi bi-ticket-detailed',
      tag: 'Recommended',
      feature: [
        {
          name: 'Vuelo Directo',
          icon2: 'bi bi-airplane-fill',
          available: true,
        },
        {
          name: 'Reserva de Boleto',
          icon2: 'bi bi-pass-fill',
          available: true,
        },
        {
          name: 'Equipaje de Mano',
          icon2: 'bi bi-backpack2-fill',
          available: true,
        },
        {
          name: 'Equipaje de 23 Kg',
          icon2: 'bi bi-luggage-fill',
          available: true,
        },
        {
          name: 'Asesoria Personalizada',
          icon2: 'bi bi-person-hearts',
          available: true,
        },
        {
          name: 'Seguro de Viaje',
          icon2: 'bi bi-clipboard-plus-fill',
          available: false,
        },
        {
          name: 'Reserva de Hotel',
          icon2: 'bi bi-building-fill',
          available: true,
        },
      ],
    },
    {
      planName: 'Caracas',
      monthlyPrice: 330,
      yearlyPrice: 570,
      exit: 'Salida de Madrid',
      icon: 'bi bi-lightning-charge-fill h5 lh-1',
      tag: 'Most Popular',
      feature: [
        {
          name: 'Vuelo Directo',
          icon2: 'bi bi-airplane-fill',
          available: true,
        },
        {
          name: 'Reserva de Boleto',
          icon2: 'bi bi-pass-fill',
          available: true,
        },
        {
          name: 'Equipaje de Mano',
          icon2: 'bi bi-backpack2-fill',
          available: true,
        },
        {
          name: 'Equipaje de 23 Kg',
          icon2: 'bi bi-luggage-fill',
          available: false,
        },
        {
          name: 'Asesoria Personalizada',
          icon2: 'bi bi-person-hearts',
          available: true,
        },
        {
          name: 'Seguro de Viaje',
          icon2: 'bi bi-clipboard-plus-fill',
          available: false,
        },
        {
          name: 'Reserva de Hotel',
          icon2: 'bi bi-building-fill',
          available: false,
        },
      ],
    },
    {
      planName: 'Miami',
      monthlyPrice: 790,
      yearlyPrice: 999,
      exit: 'salida de Caracas',
      icon: 'bi bi-send-fill h5 lh-1',
      tag: 'Best Value',
      feature: [
        {
          name: 'Con Conexion',
          icon2: 'bi bi-airplane-fill',
          available: true,
        },
        {
          name: 'Reserva de Boleto',
          icon2: 'bi bi-pass-fill',
          available: true,
        },
        {
          name: 'Equipaje de Mano',
          icon2: 'bi bi-backpack2-fill',
          available: true,
        },
        {
          name: 'Equipaje de 23 Kg',
          icon2: 'bi bi-luggage-fill',
          available: true,
        },
        {
          name: 'Asesoria Personalizada',
          icon2: 'bi bi-person-hearts',
          available: true,
        },
        {
          name: 'Seguro de Viaje',
          icon2: 'bi bi-clipboard-plus-fill',
          available: false,
        },
        {
          name: 'Reserva de Hotel',
          icon2: 'bi bi-building-fill',
          available: true,
        },
      ],
    },
    {
      planName: 'Bogota',
      monthlyPrice: 360,
      yearlyPrice: 999,
      exit: 'Salida de Caracas',
      icon: 'bi bi-send-fill h5 lh-1',
      tag: 'Best Value',
      feature: [
        {
          name: 'Vuelo Directo',
          icon2: 'bi bi-airplane-fill',
          available: true,
        },
        {
          name: 'Reserva de Boleto',
          icon2: 'bi bi-pass-fill',
          available: true,
        },
        {
          name: 'Equipaje de Mano',
          icon2: 'bi bi-backpack2-fill',
          available: true,
        },
        {
          name: 'Equipaje de 23 Kg',
          icon2: 'bi bi-luggage-fill',
          available: false,
        },
        {
          name: 'Asesoria Personalizada',
          icon2: 'bi bi-person-hearts',
          available: true,
        },
        {
          name: 'Seguro de Viaje',
          icon2: 'bi bi-clipboard-plus-fill',
          available: false,
        },
        {
          name: 'Reserva de Hotel',
          icon2: 'bi bi-building-fill',
          available: true,
        },
      ],
    },
  ]
  planList = this.pricingPlans
}
