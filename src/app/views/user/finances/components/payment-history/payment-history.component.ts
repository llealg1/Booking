import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@/app/store'
import { OrdersService } from '../../../../../core/services/orders.service'
import { ReplaceUnderscorePipe } from '@/app/core/pipes/replace-underscore.pipe'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import {  inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'earnings-payment-history',
  standalone: true,
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbPaginationModule,
    ReplaceUnderscorePipe,
    NgbNavModule,
    RouterModule,
  ],
  templateUrl: './payment-history.component.html',
  styles: ``,
})
export class PaymentHistoryComponent implements OnInit {
  currencyType = currency
  paymentHistory: any[] = []
  isLoading = true
  itemView: any = {}

  private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');


  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders(false)
  }

	open(content: TemplateRef<any>, item: any) {
    this.ordersService.getOrdersById(item.id).subscribe(() => {
      this.itemView = item
      console.log(this.itemView)
    });

		this.modalService.open(content, { size: 'xl', scrollable: true}).result.then(
			(result) => {
        this.itemView = {}
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason) => {
        this.itemView = {}
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

  getOrders(financed: boolean) {
    this.isLoading = true
    this.ordersService.getOrders(financed).subscribe(
      (res: any) => {

        console.log(res.data,financed )
        this.paymentHistory = res.data
        this.isLoading = false
      },
      () => {
        this.isLoading = false
      }
    )
  }

  changeTab(event: any) {
    console.log(event)
    const tabId = event.activeId
    this.paymentHistory = []
    if (tabId == '1') {
      this.getOrders(true)
    } else if (tabId == '2') {
      this.getOrders(false)
    }
  }

  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
