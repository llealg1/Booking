import { Component } from '@angular/core'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'
import { currency } from '@/app/store'
import { RouterLink } from '@angular/router'

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
  currency?: string
  mogu?: string
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
  imports: [NgbTooltipModule, CommonModule, RouterLink],
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
      id: 7,
      name: 'Panamá - Medellín - Panamá',
      type: 'Vuelo Directo',
      days: 5,
      nights: 4,
      date: 'Salida desde Panamá',
      price: 485,
      currency: 'USD',
      mogu: "aggressive-deep-van",
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'https://images.unsplash.com/photo-1512617883304-3affd6c4b94e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDE3NjV8MHwxfHNlYXJjaHwxNnx8Q29sb21iaWF8ZW58MHwwfHx8MTc0MTcxNTEzM3ww&ixlib=rb-4.0.3&q=85&w=1200',
      disc: false,
    },
    {
      id: 8,
      name: 'Lima - Medellín - Lima',
      type: 'Vuelo Directo',
      days: 5,
      nights: 4,
      date: 'Salida desde Lima',
      price: 499,
      currency: 'USD',
      mogu: 'nice-absurd-camera',
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'https://images.unsplash.com/photo-1512250431446-d0b4b57b27ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDE3NjV8MHwxfHNlYXJjaHwxfHxNRURFTExJTnxlbnwwfDB8fHwxNzQxNzEyNjM3fDA&ixlib=rb-4.0.3&q=85&w=1200',
      disc: false,
    },
    {
      id: 9,
      name: 'BUENOS AIRES - MEDELLIN - BUENOS AIRES',
      type: 'Vuelo Directo',
      days: 7,
      nights: 6,
      date: 'Salida desde Buenos Aires',
      currency: 'USD',
      mogu: 'pitiful-boundless-orange',
      price: 960,
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'https://images.unsplash.com/photo-1625398244649-abc29446b6c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDE3NjV8MHwxfHNlYXJjaHw2fHxtZWRlbGxpbnxlbnwwfDB8fHwxNzQxNzQwNTE1fDA&ixlib=rb-4.0.3&q=85&w=1200',
      disc: false,
    },
    {
      id: 10,
      name: 'Colonia en un Día: Un Tour Inolvidable',
      type: 'Tour',
      days: 1,
      nights: 0,
      date: 'Salida desde Buenos Aires',
      currency: 'ARS',
      mogu: "aggressive-damaged-father",
      price: 90000,
      benefits: {
        flight: 0,
        hotel: 0,
        user: 1,
        secure: 0,
        bag: 0,
        luggage: 0,
      },
      image: 'https://storage.googleapis.com/mogu-prod-v2-customers/acc_eb2ba/images/932aca81-860e-4a4a-bf46-7a1b4979443a_medium',
      disc: false,
    },
    {
      id: 11,
      name: '¡Vive la Experiencia del Vino en Colonia del Sacramento! 🍷🌿️',
      type: 'Tour',
      days: 1,
      nights: 0,
      date: 'Salida desde Buenos Aires',
      mogu: 'salmon-many-woman',
      price: 119000,
      currency: 'ARS',
      benefits: {
        flight: 0,
        hotel: 0,
        user: 1,
        secure: 0,
        bag: 0,
        luggage: 0,
      },
      image: 'https://storage.googleapis.com/mogu-prod-v2-customers/acc_eb2ba/images/cdb84adf-02bb-4a89-a267-74905994623a_medium',
      disc: false,
    },
    {
      id: 12,
      name: 'SEMANA SANTA EN MARGARITA ✝️ ☀️ 4 DIAS Y 3 NOCHES 🌙',
      type: 'Vuelo Directo',
      days: 4,
      nights: 3,
      date: 'Salida desde Caracas',
      price: 435,
      currency: 'USD',
      mogu: 'annoyed-easy-soccer',
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'https://storage.googleapis.com/mogu-prod-v2-customers/acc_eb2ba/images/d5ad77f6-207c-4929-b09f-408f1841f65b_medium',
      disc: false,
    },
    {
      id: 13,
      name: '¿MARGARITA EN SEMANA SANTA? ARCADIA TE LLEVA ☀️ 4 DIAS Y 3 NOCHES 🌙, ¡CLARO QUE SI!',
      type: 'Vuelo Directo',
      days: 4,
      nights: 3,
      date: 'Salida desde Caracas',
      price: 409,
      currency: 'USD',
      mogu: 'clever-belligerent-smartphone',
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'https://storage.googleapis.com/mogu-prod-v2-customers/acc_eb2ba/images/056a047e-f1fb-4a19-9e03-0f6f454d300a_medium',
      disc: false,
    },
    {
      id: 14,
      name: '¡Medellín Te Espera Venezuela! ✨✨',
      type: 'Vuelo Directo',
      days: 5,
      nights: 4,
      date: 'Salida desde Caracas',
      price: 999,
      currency: 'USD',
      mogu: 'shaggy-plump-motherboard',
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 0,
        bag: 1,
        luggage: 1,
      },
      image: 'https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDE3NjV8MHwxfHNlYXJjaHwyOXx8bWVkZWxsaW58ZW58MHwwfHx8MTc0MTc0MDUxNXww&ixlib=rb-4.0.3&q=85&w=1200',
      disc: false,
    },
    {
      id: 15,
      name: '¡De Caracas a Italia por Todo lo Alto! Vive el Sueño Europeo ✈️✨',
      type: 'Vuelo Directo',
      currency: 'USD',
      days: 10,
      nights: 9,
      date: 'Salida desde Caracas',
      price: 3100,
      mogu: 'mango-wide-scientist',
      benefits: {
        flight: 1,
        hotel: 1,
        user: 1,
        secure: 1,
        bag: 1,
        luggage: 1,
      },
      image: 'https://images.unsplash.com/photo-1598537251598-d8033210de65?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyMDE3NjV8MHwxfHNlYXJjaHwyOHx8aXRhbGlhfGVufDB8MHx8fDE3NDE4MDEzNjN8MA&ixlib=rb-4.0.3&q=85&w=1200',
      disc: false,
    },
    {
      id: 16,
      name: '💎 Experiencia Premium en Colonia 💎',
      type: 'Tour',
      days: 1,
      nights: 0,
      date: 'Salida desde Buenos Aires',
      currency: 'ARS',
      mogu: 'odd-brainy-australia',
      price: 98000,
      benefits: {
        flight: 0,
        hotel: 0,
        user: 1,
        secure: 0,
        bag: 0,
        luggage: 0,
      },
      image: 'https://storage.googleapis.com/mogu-prod-v2-customers/acc_eb2ba/images/f6aa3901-8c82-4204-85e8-586c08d3a0ad_medium',
      disc: false,
    },
  ]
  tourList = this.tourCards

  currencyType = currency
}
