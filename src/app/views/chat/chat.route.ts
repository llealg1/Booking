import { Route } from '@angular/router'
import { ChatComponent } from './chat.component'
export const CHAT_ROUTES: Route[] = [
  {
    path: '',
    component: ChatComponent,
    data: { title: 'Booking Confirmed' },
  },
]
