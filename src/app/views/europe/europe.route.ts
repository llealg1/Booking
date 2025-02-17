import { Route } from '@angular/router'
import { EuropeComponent } from './europe.component'
export const EUROPE_ROUTES: Route[] = [
  {
    path: '',
    component: EuropeComponent,
    data: { title: 'Promociones' },
  },
]
