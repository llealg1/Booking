import { Route } from '@angular/router'
import { FaqComponent } from './faq.component'
export const faq_ROUTES: Route[] = [
  {
    path: '',
    component: FaqComponent,
    data: { title: 'Booking Confirmed' },
  },
]
