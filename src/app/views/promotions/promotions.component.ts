import { Component } from '@angular/core'
import { PricingplansComponent } from './componets/pricingplans/pricingplans.component'
import { MultipleTabsComponent } from './componets/multiple-tabs/multiple-tabs.component'

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [PricingplansComponent, MultipleTabsComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss',
})
export class PromotionsComponent {
  venecia: string = 'assets/images/venecia.jpg'
}
