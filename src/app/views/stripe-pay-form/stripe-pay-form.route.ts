import { Route } from '@angular/router'
import { StripePayFormComponent } from './stripe-pay-form.component'
export const STRIPE_ROUTES: Route[] = [
  {
    path: ':id',
    component: StripePayFormComponent,
    data: { title: 'Stripe-pay' },
  },

]
