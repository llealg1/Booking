import { Route } from '@angular/router'
import { PromotionsComponent } from './promotions.component'
import { PromotionsDetailComponent } from './promotions-detail/promotions-detail.component'
export const PROMOTIONS_ROUTES: Route[] = [
  {
    path: '',
    component: PromotionsComponent,
    data: { title: 'Promociones' },
  },
  {
    path: 'promotions-detail/:id',
    component: PromotionsDetailComponent,
    data: { title: 'Promociones' },
  },
]
