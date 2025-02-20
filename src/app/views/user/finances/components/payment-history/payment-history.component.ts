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
import { inject, signal, TemplateRef, WritableSignal } from '@angular/core'
import { AviationEdgeService } from '../../../../../core/services/aviation-edge.service'
import { map } from 'rxjs/operators'
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap'

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
  styles: `
    .text-success {
      color: green;
    }

    .text-danger {
      color: red;
    }
  `,
})
export class PaymentHistoryComponent implements OnInit {
  currencyType = currency
  paymentHistory: any[] = []
  isLoading = true
  itemView: any = {}
  totalItems = 0
  page = 1
  limit = 10
  dataTracker: any[] = []
  private modalService = inject(NgbModal)
  closeResult: WritableSignal<string> = signal('')

  constructor(
    private ordersService: OrdersService,
    private aviationEdgeService: AviationEdgeService
  ) {}

  ngOnInit(): void {
    this.getOrders(false)
  }

  open(content: TemplateRef<any>, item: any) {
    this.ordersService.getOrdersById(item.id).subscribe(() => {
      this.itemView = item
      console.log(this.itemView)
      this.itemView.location.map((location: any) => {
        location.ticket.map((ticket: any) => {

        })
      })
    })

    this.modalService
      .open(content, { size: 'xl', scrollable: true })
      .result.then(
        (result) => {
          this.itemView = {}
          this.closeResult.set(`Closed with: ${result}`)
        },
        (reason) => {
          this.itemView = {}
          this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`)
        }
      )
  }

  getOrders(financed: boolean) {
    this.isLoading = true
    this.ordersService.getOrders(financed, this.page).subscribe(
      (res: any) => {
        this.paymentHistory = res.data
        // console.log(this.paymentHistory);
        this.totalItems = res.meta.totalItems
        this.isLoading = false
      },
      () => {
        this.isLoading = false
      }
    )
  }

  changeTab(event: any) {
    const tabId = event.activeId
    this.page = 1
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
        return 'by pressing ESC'
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop'
      default:
        return `with: ${reason}`
    }
  }

  onPageChange(page: number) {
    this.page = page
    this.getOrders(false)
  }

  async getInfoFlight(flightId: string) {
    return await this.aviationEdgeService.getInfoFlight(flightId).toPromise()
  }
}
