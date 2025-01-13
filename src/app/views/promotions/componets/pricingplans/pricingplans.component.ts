import { Component } from '@angular/core'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { currency } from '@/app/store'

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

type TourCardType = {
  id: number
  name: string
  date: string
  type: string
  sale?: string
  days: number
  nights: number
  benefits: {
    flight?: number
    hotel?: number
    activities?: number
    user?: number
    secure?: number
    bag?: number
    luggage?: number
  }
  price: number
  image: string
  disc: boolean
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

  tourCards: TourCardType[] = [
    {
      id: 1,
      name: 'Caracas',
      type: 'Vuelo Directo',
      sale: '30% Off',
      days: 6,
      nights: 5,
      date: 'Salida desde Buenos Aires',
      price: 680,
      benefits: {
        flight: 1,
        hotel: 0,
        user: 1,
        secure: 1,
        bag: 0,
        luggage: 1,
      },
      image: 'assets/images/6.png',
      disc: true,
    },
    {
      id: 2,
      name: 'Madrid',
      type: 'Vuelo Directo',
      days: 6,
      nights: 5,
      date: 'Salida desde Caracas',
      price: 700,
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'assets/images/6.png',
      disc: false,
    },
    {
      id: 3,
      name: 'Caracas',
      type: 'Vuelo Directo',
      days: 5,
      nights: 4,
      date: 'Salida desde Madrid',
      price: 330,
      benefits: {
        flight: 1,
        hotel: 0,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 0,
      },
      image: 'assets/images/6.png',
      disc: false,
    },
    {
      id: 4,
      name: 'Miami',
      type: 'Con Conexion',
      days: 4,
      nights: 3,
      date: 'Salida desde Caracas',
      price: 790,
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'assets/images/6.png',
      disc: false,
    },
    {
      id: 5,
      name: 'Bogota',
      type: 'Vuelo Directo',
      days: 5,
      nights: 4,
      date: 'Salida desde Caracas',
      price: 360,
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 0,
      },
      image: 'assets/images/6.png',
      disc: false,
    },
    {
      id: 6,
      name: 'Roma',
      type: 'Con Conexion',
      days: 6,
      nights: 7,
      date: 'Salida desde Caracas',
      price: 760,
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 1,
        bag: 1,
        luggage: 1,
      },
      image: 'assets/images/6.png',
      disc: false,
    },
  ]
  tourList = this.tourCards

  currencyType = currency
}
