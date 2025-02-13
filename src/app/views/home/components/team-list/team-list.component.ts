import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TinySliderSettings } from 'tiny-slider';
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantsService } from '@/app/core/services/consultants.service';
import { Router } from '@angular/router';

const avatar1 = 'assets/images/carmelo.png';
const avatar2 = 'assets/images/melani.png';
const avatar3 = 'assets/images/pierina.png';

@Component({
  selector: 'our-team-list',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, TinySliderComponent],
  templateUrl: './team-list.component.html',
  styles: ``,
})
export class TeamListComponent implements OnInit {
  memberList: any[] = [
    {
      name: 'Dennis Barrett',
      position: 'UK Tourist Guide',
      image: avatar1,
    },
    {
      name: 'Jacqueline Miller',
      position: 'Us Tourist Guide',
      image: avatar2,
    },
    {
      name: 'Larry Lawson',
      position: 'Editor in Chief',
      image: avatar3,
    },
  ];

  @ViewChild('clientSlider', { static: false }) clientSlider: any;

  clientSliderSetting: TinySliderSettings = {
    autoplay: true,
    edgePadding: 0,
    gutter: 80,
    arrowKeys: false,
    items: 5,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };
  clientList: any = [];
  chunkedMemberList: any[][] = [];

  clientList1 = [
    { id: 4, image: 'assets/images/proveedores/AVIOR.png' },
    { id: 5, image: 'assets/images/proveedores/BT-TRAVEL.png' },
    { id: 6, image: 'assets/images/proveedores/ESTELAR.png' },
    { id: 7, image: 'assets/images/proveedores/EXPEDIA-1.png' },
    { id: 8, image: 'assets/images/proveedores/FVF.png' },
    { id: 9, image: 'assets/images/proveedores/INTERWELT.png' },
    { id: 10, image: 'assets/images/proveedores/VIRAmundo.png' },
    { id: 11, image: 'assets/images/proveedores/vivitatis.png' },
  ];

  constructor(private consultantsService: ConsultantsService, private router: Router) {}

  navigateToAdvisor(team: any) {
    this.router.navigate([`/advisors/${team.id}/${team.name}-${team.lastName}`]);
  }

  ngOnInit() {
    const startDate = this.getFirstDayOfMonth();
    const endDate = this.getLastDayOfMonth();

    this.consultantsService.getUsersPortalHome(startDate, endDate).subscribe((consultants) => {
      // console.log(consultants);
      this.memberList = consultants;
      // Mamalo puto!+
      this.memberList = this.memberList.filter((data) => data.id != 7);
      this.chunkedMemberList = this.chunkArray(this.memberList, 4);
    });
  }

  getFirstDayOfMonth(): string {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    firstDay.setUTCHours(0, 0, 0, 0);
    return firstDay.toISOString();
  }

  getLastDayOfMonth(): string {
    const date = new Date();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    lastDay.setUTCHours(23, 59, 59, 999);
    return lastDay.toISOString();
  }

  chunkArray(myArray: any[], chunk_size: number): any[][] {
    const results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }
}
