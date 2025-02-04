import { Component, OnInit, ViewChild } from '@angular/core'
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbDropdownModule,
  NgbModal,
  NgbNavModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { upcomingBookingData } from './data'
import { RouterModule } from '@angular/router'
import { OrdersService } from '../../../core/services/orders.service'
import { CommonModule } from '@angular/common'
import { QRCodeComponent } from 'angularx-qrcode'
import { API_URL } from '@/app/core/config/url.constans'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-bookings',
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

  templateUrl: './bookings.component.html',
  styles: `
    .card {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    hr {
      border-top: 1px solid #ccc;
    }
  `,
})
export class BookingsComponent implements OnInit {
  upcomingBookingData: any = upcomingBookingData
  isLoading: boolean = false
  page: number = 1
  totalItems: number = 0
  limit = 10
  paused = false
  unpauseOnArrow = false
  pauseOnIndicator = false
  pauseOnHover = true
  pauseOnFocus = true
  reverveSelect: any
  stream: any = `${API_URL}/locator-ticket/image/`
  pdfSrc: SafeResourceUrl | null = null;
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel =
    new NgbCarousel()

  ngOnInit(): void {}
  constructor(
    private ordersService: OrdersService,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer
  ) {
    this.getOrders(false)
    this.carousel?.pause()
  }

  openModal(content: any, item: any) {
    this.reverveSelect = item
    // console.log(this.reverveSelect);
    this.modalService.open(content, { size: 'xl', centered: true })
  }

  getOrders(financed: boolean) {
    this.isLoading = true
    this.ordersService.getOrders(financed, this.page).subscribe(
      (res: any) => {
        this.upcomingBookingData = res.data
        // console.log(res)
        this.totalItems = res.meta.totalItems
        this.isLoading = false
      },
      () => {
        this.isLoading = false
      }
    )
  }

  onPageChange(page: number) {
    this.page = page
    this.getOrders(false)
  }

  downloadPdf(order: any, content: any) {
    this.ordersService.downloadPdf(order.fileUrl).subscribe((response: Blob) => {
      const fileURL = URL.createObjectURL(response);
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
      this.modalService.open(content, { size: 'xl', centered: true });
    });
  }


  changeTab(event: any) {
    // console.log(event)
    const tabId = event.activeId
    this.page = 1
    this.upcomingBookingData = []
    if (tabId == '1') {
      this.getOrders(true)
    } else if (tabId == '2') {
      this.getOrders(false)
    }
  }
}
