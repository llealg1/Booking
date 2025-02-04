import { OrdersService } from '@/app/core/services/orders.service'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbPaginationModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-car-rentals',
  standalone: true,
  imports: [
    NgbNavModule,
    RouterModule,
    NgbDropdownModule,
    CommonModule,
    NgbPaginationModule,
  ],
  templateUrl: './car-rentals.component.html',
  styleUrl: './car-rentals.component.scss',
})
export class CarRentalsComponent {
  isLoading: boolean = false
  page: number = 1
  totalItems: number = 0
  limit = 10
  paused = false
  unpauseOnArrow = false
  pauseOnIndicator = false
  pauseOnHover = true
  pauseOnFocus = true
  reverveSelect: any
  carRentalsData:any[] = []

  constructor(
    private ordersService: OrdersService,
    private modalService: NgbModal
  ) {}

  openModal(content: any, item: any) {
    this.reverveSelect = item
    this.modalService.open(content, { size: 'xl', centered: true })
  }

  getOrders(financed: boolean) {
    this.isLoading = true
    this.ordersService.getOrders(financed, this.page).subscribe(
      (res: any) => {
        this.carRentalsData = res.data
        // console.log(res)
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
}
