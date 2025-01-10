import { AfterViewInit, Component, inject, OnInit, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';
import { AdvisorSliderComponent } from './components/advisor-slider/advisor-slider.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionBoxComponent } from './components/action-box/action-box.component';
import { BannerComponent } from './components/banner/banner.component';
import {
  NgbModalModule,
  NgbNavModule,
  NgbModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap'
import { FeaturedHolidayComponent } from './components/featured-holiday/featured-holiday.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { ActionBoxAnalitycsComponent } from './components/action-box-analitycs/action-box.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ActionBoxAboutusComponent } from './components/action-box-aboutus/action-box.component';
import { BannerHomeComponent } from './components/banner-home/banner.component';
import { ActionComponent } from './components/action/action.component';
import { ConsultantsService } from '../../core/services/consultants.service';
import { CasheaBannerComponent } from "./components/cashea-banner/cashea-banner.component";
import { OfferSliderComponent } from './components/offer-slider/offer-slider.component';
import { DestinationsGridComponent } from './components/destinations-grid/destinations-grid.component';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    AdvisorSliderComponent,
    DestinationsGridComponent,
    NgbAlertModule,
    ActionBoxComponent,
    NgbModalModule,
    NgbNavModule,
    BannerComponent,
    FeaturedHolidayComponent,
    TeamListComponent,
    ActionBoxAnalitycsComponent,
    ClientsComponent,
    ActionBoxAboutusComponent,
    BannerHomeComponent,
    ActionComponent,
    CasheaBannerComponent,
    OfferSliderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  staticAlert = true
  promoAlert = true


  private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');
  @ViewChild('content') modalBanner!: TemplateRef<any>;
  constructor(private consultantsService: ConsultantsService) {

  }

  ngOnInit(): void {

    this.consultantsService.getUsersPortal().subscribe((data) => {
      console.log(data);
    });
    // this.open(this.modalBanner);
  }

  ngAfterViewInit(): void {
    this.open(this.modalBanner);
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      }
    );
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
