import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'
import { OrdersService } from '../../../../../core/services/orders.service'
import { ReplaceUnderscorePipe } from '@/app/core/pipes/replace-underscore.pipe'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'earnings-payment-history',
  standalone: true,
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbPaginationModule,
    ReplaceUnderscorePipe,
    NgbNavModule,
    RouterModule,
  ],
  templateUrl: './payment-history.component.html',
  styles: ``,
})
export class PaymentHistoryComponent implements OnInit {
  currencyType = currency
  paymentHistory: any[] = []
  isLoading = true

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders(true)
  }

  getOrders(financed: boolean) {
    this.isLoading = true
    this.ordersService.getOrders(financed).subscribe(
      (res: any) => {
        this.paymentHistory = res.data
        this.isLoading = false
      },
      () => {
        this.isLoading = false
      }
    )
  }

  changeTab(event: any) {
    console.log(event)
    const tabId = event.nextId
    this.paymentHistory = []
    if (tabId === 'ngb-nav-0') {
      this.getOrders(false)
    } else if (tabId === 'ngb-nav-1') {
      this.getOrders(true)
    }
  }
}
