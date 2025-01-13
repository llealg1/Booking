import { Route } from '@angular/router'
import { FaqComponent } from './faq.component'
export const FAQ_ROUTES: Route[] = [
  {
    path: '',
    component: FaqComponent,
    data: { title: 'FAQ' },
  },
]
