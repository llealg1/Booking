import { Component } from '@angular/core'
import { TopbarComponent } from '../home/components/topbar/topbar.component'
import { BookingComponent } from './componets/booking/booking.component'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TopbarComponent, BookingComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {}
