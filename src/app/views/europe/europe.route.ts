import { Route } from '@angular/router'
import { EuropeComponent } from './europe.component'
import { ConfirmTicketComponent } from './components/confirm-ticket/confirm-ticket.component'
export const EUROPE_ROUTES: Route[] = [
  {
    path: '',
    component: EuropeComponent,
    data: { title: 'Promociones' },
  },
  {
    path: 'europe-congratulation',
    component: ConfirmTicketComponent,
    data: { title: 'Confirmado' },
  },
]
