import { Route } from '@angular/router'
import { PolicyComponent } from './policy.component'
export const POLICY_ROUTES: Route[] = [
  {
    path: '',
    component: PolicyComponent,
    data: { title: 'Terminos y Condiciones' },
  },
]
