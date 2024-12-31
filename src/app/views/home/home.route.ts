import { Route } from '@angular/router'
import { PrincipalComponent } from './principal/principal.component'
export const HOME_ROUTES: Route[] = [
  {
    path: '',
    component: PrincipalComponent,
    data: { title: 'Booking Confirmed' },
  }
]
