import { AfterViewInit, Component, inject, OnInit, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { TestimonialSliderComponent } from '../components/testimonial-slider/testimonial-slider.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionBoxComponent } from '../components/action-box/action-box.component';
import { HeroComponent } from '../components/hero/hero.component';
import { Footer1Component } from '../../about-us/about/components/footer1/footer1.component';
import { FooterComponent } from '../components/footer/footer.component';
import { BannerComponent } from '../components/banner/banner.component';
import {
  NgbModalModule,
  NgbNavModule,
  NgbModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap'
import { FeaturedHolidayComponent } from '../components/featured-holiday/featured-holiday.component';
import { TeamListComponent } from '../components/team-list/team-list.component';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    TopbarComponent,
    TestimonialSliderComponent,
    NgbAlertModule,
    ActionBoxComponent,
    HeroComponent,
    FooterComponent,
    NgbModalModule,
    NgbNavModule,
    BannerComponent,
    FeaturedHolidayComponent,
    TeamListComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent implements OnInit, AfterViewInit {
  staticAlert = true
  promoAlert = true


  private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');
  @ViewChild('content') modalBanner!: TemplateRef<any>;
  constructor() {

  }

  ngOnInit(): void {
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
