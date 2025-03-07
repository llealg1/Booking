import { Route } from '@angular/router'
import { LeadsComponent } from './leads.component'
export const LEADS_ROUTES: Route[] = [
  {
    path: '',
    component: LeadsComponent,
    data: { title: 'Chat' },
  },
]
