import { Route } from '@angular/router'
import { OfficeComponent } from './office.component'
export const OFFICE_ROUTES: Route[] = [
  {
    path: ':name',
    component: OfficeComponent,
    data: { title: 'office' },
  },
]
