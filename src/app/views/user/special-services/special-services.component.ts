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
  selector: 'app-special-services',
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
  templateUrl: './special-services.component.html',
  styleUrl: './special-services.component.scss',
})
export class SpecialServicesComponent implements OnInit {
  wishListCards: any = []

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe((response: any) => {
      this.wishListCards = response?.data
      this.wishListCards = [this.wishListCards[0]]
      console.log(this.wishListCards)
    })
  }
}
