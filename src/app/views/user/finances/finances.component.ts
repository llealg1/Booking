import { Component } from '@angular/core'
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component'

@Component({
  selector: 'app-finances',
  standalone: true,
  imports: [PaymentHistoryComponent],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.scss',
})
export class FinancesComponent {}
