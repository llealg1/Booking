import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbCarouselModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { QRCodeComponent } from 'angularx-qrcode'
import { OrdersService } from '../../../core/services/orders.service';

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
    QRCodeComponent
  ],
  templateUrl: './hotel-bookings.component.html',
  styleUrl: './hotel-bookings.component.scss',
})
export class HotelBookingsComponent implements OnInit {
  wishListCards:any = [

  ]

  constructor(private ordersService:OrdersService) {
  }


  ngOnInit(): void {
    this.ordersService.getOrders().subscribe((response:any) => {
      this.wishListCards = response?.data
      console.log(this.wishListCards)
    });
  }
}
