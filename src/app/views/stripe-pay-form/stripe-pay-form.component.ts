import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { StripeService } from 'ngx-stripe';
import { PaymentMethodsService } from '../../core/services/payment-methods.service';

@Component({
  selector: 'app-stripe-pay-form',
  standalone: true,
  imports: [


  ],
  templateUrl: './stripe-pay-form.component.html',
  styleUrls: ['./stripe-pay-form.component.scss'],
  providers: [],
})
export class StripePayFormComponent  {
  constructor(
    private stripeService: StripeService,
    private paymentMethodsService: PaymentMethodsService
  ) {}

  checkout() {
    this.paymentMethodsService.getPaymentMethods({
      amount: 100,
      currency: 'usd',
      name: 'Servicios de yoander',
      quantity: 1000,

    }).pipe(
      switchMap((session: any) => {
        return this.stripeService.redirectToCheckout({ sessionId: session.id })
      })
    ).subscribe(result => {
      console.log(result);
    });
  }
}


