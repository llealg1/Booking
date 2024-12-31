import { Route } from '@angular/router'
import { BusinessComponent } from './business.component'
export const BUSINESS_ROUTES: Route[] = [
  {
    path: '',
    component: BusinessComponent,
    data: { title: 'Booking Confirmed' },
  },
]
