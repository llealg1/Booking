import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { wishListCards } from './data'
import { currency } from '@/app/store'
import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule, DateFormInputDirective],
  templateUrl: './wishlist.component.html',
  styles: ``,
})
export class WishlistComponent {
  wishListCards = wishListCards
  currencyType = currency

  onSave() {
    // if (this.dateInfoForm.valid) {
    //   console.log(this.dateInfoForm.value)
    //   // Aquí puedes agregar la lógica para guardar los cambios
    // }
  }
}
