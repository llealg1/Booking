import { Component } from '@angular/core'
import { BookingComponent } from './componets/booking/booking.component'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [BookingComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {}
