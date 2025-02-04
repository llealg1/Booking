import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
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
import { OrdersService } from '../../../core/services/orders.service'

@Component({
  selector: 'app-hotel-bookings',
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
  templateUrl: './hotel-bookings.component.html',
  styleUrl: './hotel-bookings.component.scss',
})
export class HotelBookingsComponent implements OnInit {
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
  calcularDiasEstadia(item: { dateStart: string; dateEnd: string }): number {
    if (!item.dateStart || !item.dateEnd) return 0 // Evitar errores si las fechas no están definidas
    const fechaInicio = new Date(item.dateStart)
    const fechaFin = new Date(item.dateEnd)
    const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime()
    return Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24)) // Convertir a días
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
