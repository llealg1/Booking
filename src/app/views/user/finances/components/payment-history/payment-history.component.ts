import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'

@Component({
  selector: 'earnings-payment-history',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, NgbPaginationModule],
  templateUrl: './payment-history.component.html',
  styles: ``,
})
export class PaymentHistoryComponent {
  currencyType = currency

  paymentHistory: any[] = [
    {
      id: 2045896,
      date: '02 Dec 2022',
      amount: '3.999',
      status: 'Pagado',
    },
    {
      id: 124896,
      date: '01 Dec 2022',
      amount: '2.500',
      status: 'Pagado',
    },
    {
      id: 201547,
      date: '25 Nov 2022',
      amount: '4.140',
      status: 'Pendiente',
    },
    {
      id: 145750,
      date: '24 Nov 2022',
      amount: '3.245',
      status: 'Pagado',
    },
    {
      id: 524780,
      date: '22 Nov 2022',
      amount: '1.825',
      status: 'Cancelado',
    },
    {
      id: 47850,
      date: '20 Nov 2022',
      amount: '3.656',
      status: 'Pagado',
    },
  ]
}
