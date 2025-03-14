import { Route } from '@angular/router'
import { AdvisorsComponent } from './advisors.component'
import { AdvisorsDetailComponent } from './advisors-detail/advisors-detail.component'
export const ADVISORS_ROUTES: Route[] = [
  {
    path: '',
    component: AdvisorsComponent,
    data: { title: 'Asesores' },
  },
  {
    path: ':id/:name',
    component: AdvisorsDetailComponent,
    data: { title: 'Asesores' },
  },
]
