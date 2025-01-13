import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'faqs-booking',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule],
  templateUrl: './booking.component.html',
  styles: ``,
})
export class BookingComponent {
  faqList = [
    {
      title: '¿Qué servicios ofrece Arcadia Viajes?',
      description:
        'En Arcadia Viajes ofrecemos soluciones personalizadas para tus viajes, que incluyen asesoría durante todo el proceso, opciones de vuelo adaptadas a tus necesidades, equipaje incluido, hospedaje y acompañamiento desde el inicio hasta el final del trayecto.',
    },
    {
      title: '¿Qué incluye el precio de los vuelos?',
      description:
        'Nuestros precios no solo cubren el costo del vuelo y el equipaje completo, sino que también incluyen asesoría personalizada para planificar cada detalle de tu viaje y garantizar que tengas la mejor experiencia.',
    },
    {
      title: '¿Qué debo hacer para cotizar un vuelo?',
      description:
        'Cotizar es muy fácil: 1: Contáctanos a través de nuestra web, redes sociales o teléfono. 2:Define tu destino y las fechas del viaje con nuestro equipo. 3: Un asesor te guiará paso a paso durante todo el proceso para ajustar la oferta a tus necesidades. ',
    },
    {
      title: '¿Puedo financiar mi vuelo con Arcadia Viajes?',
      description:
        'Sí, contamos con plataformas de financiamiento en varios países. Consulta con la sede de tu región para obtener información detallada sobre las opciones de pago y financiamiento disponibles.',
    },
    {
      title: '¿Qué destinos están disponibles?',
      description:
        'Con Arcadia Viajes puedes volar a cualquier lugar del mundo. Nuestro equipo se encargará de ofrecerte las mejores opciones según tu destino y tus preferencias.',
    },
    {
      title: '¿El seguro de viaje está incluido?',
      description:
        'El seguro de viaje no está incluido en nuestras ofertas. Sin embargo, te ofrecemos un acompañamiento personalizado durante todo el trayecto para que disfrutes de tu viaje con tranquilidad.',
    },
    {
      title: '¿Qué ventajas tiene reservar con Arcadia Viajes?',
      description:
        'Reservar con Arcadia te ofrece: a: Asesoría personalizada durante todo el proceso. b: Opciones adaptadas a tus necesidades. c: Atención 24 horas para resolver cualquier inquietud. d: Acompañamiento continuo desde el inicio hasta el final de tu viaje.',
    },
    {
      title: '¿Qué debo hacer en caso de cambios o cancelaciones?',
      description:
        'Si necesitas realizar algún cambio o cancelar tu reserva, nuestro equipo de asesores estará disponible para orientarte sobre las políticas aplicables según tu tarifa. Contáctanos para resolver cualquier duda.',
    },
    {
      title: '¿Cómo funciona la asesoría personalizada?',
      description:
        'Nuestro equipo está disponible para brindarte un servicio integral y adaptado a tus necesidades. Desde la elección de fechas y destinos hasta la planificación de cada detalle, te acompañamos en todo momento para garantizar que tu experiencia sea perfecta.',
    },
    {
      title: '¿Cómo puedo comunicarme con Arcadia Viajes?',
      description:
        'Puedes contactarnos a través de nuestra página web, redes sociales o por teléfono. Nuestro equipo de asesores está disponible las 24 horas para ayudarte con cualquier consulta o inquietud.',
    },
  ]
  helpServicesList = [
    {
      title: 'VUELOS:',
      icon: 'bi bi-airplane-engines-fill',
      variant: 'text-primary',
      services: [
        '¿Qué incluye el precio de los vuelos?',
        '¿Qué debo hacer para cotizar un vuelo?',
        '¿Qué destinos están disponibles?',
        'Updates and Support',
      ],
    },
    {
      title: 'HOSPEDAJES:',
      icon: 'bi bi-building-fill-add',
      variant: 'text-primary+',
      services: [
        'Connecting to your Account',
        'Edit your profile information',
        'Connecting to other Social Media Accounts',
        'Adding your profile picture',
        'Describing your store',
      ],
    },
    {
      title: 'SERVICIOS ESPECIALES:',
      icon: 'bi bi-luggage-fill',
      variant: 'text-primary',
      services: [
        'Security & Privacy',
        '¿Qué ventajas tiene reservar con Arcadia Viajes?',
        '¿Cómo funciona la asesoría personalizada?',
        '¿El seguro de viaje está incluido?',
        'Promotions & Deals',
      ],
    },
  ]
}
