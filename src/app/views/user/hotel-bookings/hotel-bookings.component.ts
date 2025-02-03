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

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe((response: any) => {
      this.wishListCards = response?.data
      console.log(this.wishListCards)
    })
  }
  calcularDiasEstadia(item: { dateStart: string; dateEnd: string }): number {
    if (!item.dateStart || !item.dateEnd) return 0 // Evitar errores si las fechas no están definidas
    const fechaInicio = new Date(item.dateStart)
    const fechaFin = new Date(item.dateEnd)
    const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime()
    return Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24)) // Convertir a días
  }
}
