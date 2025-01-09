import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { RouterModule, RouterLink } from '@angular/router'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'
import { bookingDetailList } from '../../admin/bookings/detail/data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    NgbDropdownModule,
    RouterModule,
    CommonModule,
    SelectFormInputDirective,
    NgbPaginationModule,
    RouterLink,
  ],
  templateUrl: './wishlist.component.html',
  styles: ``,
})
export class WishlistComponent {
  bookingDetailList = bookingDetailList
  currencyType = currency
}
