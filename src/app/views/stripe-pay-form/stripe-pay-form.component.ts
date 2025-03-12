import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule, NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { currency } from '@/app/store';
import { NgxStripeModule, StripeElementsDirective, StripePaymentElementComponent, injectStripe } from 'ngx-stripe';
import { StripeElementsOptions, StripePaymentElementOptions } from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe-pay-form',
  standalone: true,
  imports: [
    NgbAccordionModule,
    NgxMaskDirective,
    NgbAlertModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StripePaymentElementComponent,
    StripeElementsDirective,

  ],
  templateUrl: './stripe-pay-form.component.html',
  styleUrls: ['./stripe-pay-form.component.scss'],
  providers: [provideNgxMask()],
})
export class StripePayFormComponent implements OnInit {
  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;

  currencyType = currency;
  staticAlertClosed = false;

  paymentForm!: UntypedFormGroup;
  submit = false;

  private fb = inject(UntypedFormBuilder);
  public stripe = injectStripe('pk_live_51R1HyuFTVkUctNSIGGiwje6x7aIXcMvPssCwaPBy7UQ5nm5vqxp06Ig12WtlnjFvT9aK059u05M7SIJBNHdtn6J400FcYspzj4');

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    clientSecret: 'your-client-secret',
    appearance: {
      theme: 'flat'
    }
  };

  paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
      radios: false,
      spacedAccordionItems: false
    }
  };

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardnumber: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      zipcode: [''],
      city: [''],
      amount: [2500, [Validators.required, Validators.pattern(/\d+/)]]
    });
  }

  get form() {
    return this.paymentForm.controls;
  }

  onSubmit() {
    this.submit = true;
    if (this.paymentForm.invalid) return;

    if (!this.paymentElement || !this.paymentElement.elements) {
      console.error('Stripe Payment Element is not initialized.');
      return;
    }

    const { name, email, address, zipcode, city } = this.paymentForm.getRawValue();

    this.stripe.confirmPayment({
      elements: this.paymentElement.elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: name as string,
            email: email as string,
            address: {
              line1: address as string,
              postal_code: zipcode as string,
              city: city as string
            }
          }
        }
      },
      redirect: 'if_required'
    }).subscribe(result => {
      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        alert({ success: false, error: result.error.message });
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          alert({ success: true });
        }
      }
    });
  }


}
