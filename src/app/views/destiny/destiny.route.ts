import { Route } from '@angular/router'
import { DestinyComponent } from './destiny.component'
export const DESTINY_ROUTES: Route[] = [
  {
    path: '',
    component: DestinyComponent,
    data: { title: 'Planificador' },
  },
]
