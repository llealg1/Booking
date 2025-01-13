import { Route } from '@angular/router'
import { PromotionsComponent } from './promotions.component'
export const PROMOTIONS_ROUTES: Route[] = [
  {
    path: '',
    component: PromotionsComponent,
    data: { title: 'Promociones' },
  },
]
