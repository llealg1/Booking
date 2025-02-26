import { Route } from '@angular/router'
import { InfoComponent } from './info.component'
export const INFO_ROUTES: Route[] = [
  {
    path: '',
    component: InfoComponent,
    data: { title: 'info' },
  },
]
