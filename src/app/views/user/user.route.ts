import { Route } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { BookingsComponent } from './bookings/bookings.component'
import { SettingsComponent } from './settings/settings.component'
import { TravelersComponent } from './travelers/travelers.component'
import { WishlistComponent } from './wishlist/wishlist.component'
import { PaymentDetailsComponent } from './payment-details/payment-details.component'
import { DeleteProfileComponent } from './delete-profile/delete-profile.component'
import { FinancesComponent } from './finances/finances.component'
import { WishlistCreateComponent } from './wishlist/wishlist-create/wishlist-create.component'
import { HotelBookingsComponent } from './hotel-bookings/hotel-bookings.component'
import { DatesComponent } from './dates/dates.component'
import { InsurancesComponent } from './insurances/insurances.component'
import { CarRentalsComponent } from './car-rentals/car-rentals.component'
import { SpecialServicesComponent } from './special-services/special-services.component'

export const USER_PAGES_ROUTES: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'User - Profile' },
  },
  {
    path: 'bookings',
    component: BookingsComponent,
    data: { title: 'User - Bookings' },
  },
  {
    path: 'dates',
    component: DatesComponent,
    data: { title: 'User - Dates' },
  },
  {
    path: 'insurances',
    component: InsurancesComponent,
    data: { title: 'User - Insurances' },
  },
  {
    path: 'special-services',
    component: SpecialServicesComponent,
    data: { title: 'User - special-services' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'User - Settings' },
  },
  {
    path: 'travelers',
    component: TravelersComponent,
    data: { title: 'User - Travelers' },
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    data: { title: 'User - Wishlist' },
  },
  {
    path: 'wishlist-create',
    component: WishlistCreateComponent,
    data: { title: 'User - Wishlist-create' },
  },
  {
    path: 'finances',
    component: FinancesComponent,
    data: { title: 'User - finances' },
  },
  {
    path: 'payment-details',
    component: PaymentDetailsComponent,
    data: { title: 'User - Payment Details' },
  },
  {
    path: 'hotel-bookings',
    component: HotelBookingsComponent,
    data: { title: 'User - Hotel Bookings' },
  },
  {
    path: 'delete-profile',
    component: DeleteProfileComponent,
    data: { title: 'User - Delete Profile' },
  },
  {
    path: 'rental-cars',
    component: CarRentalsComponent,
    data: { title: 'User - Rental Cars' },
  },
]
