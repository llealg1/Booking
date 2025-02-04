import { OrdersService } from '@/app/core/services/orders.service'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  NgbCarouselModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { QRCodeComponent } from 'angularx-qrcode'

@Component({
  selector: 'app-insurances',
  standalone: true,
  imports: [
    NgbNavModule,
    RouterModule,
    NgbDropdownModule,
    CommonModule,
    NgbCarouselModule,
    NgbPaginationModule,
    QRCodeComponent,
  ],
  templateUrl: './insurances.component.html',
  styleUrl: './insurances.component.scss',
})
export class InsurancesComponent implements OnInit {
  wishListCards: any = []
  isLoading = true
  totalItems = 0
  page = 1
  limit = 10
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders(false)
  }

  getOrders(financed: boolean) {
    this.isLoading = true
    this.ordersService.getOrders(financed, this.page).subscribe(
      (res: any) => {
        this.wishListCards = res.data
        this.totalItems = res.meta.totalItems
        this.isLoading = false
      },
      () => {
        this.isLoading = false
      }
    )
  }

  onPageChange(page: number) {
    this.page = page
    this.getOrders(false)
  }

  changeTab(event: any) {
    console.log(event)
    const tabId = event.activeId
    this.page = 1
    this.wishListCards = []
    if (tabId == '1') {
      this.getOrders(true)
    } else if (tabId == '2') {
      this.getOrders(false)
    }
  }

}
