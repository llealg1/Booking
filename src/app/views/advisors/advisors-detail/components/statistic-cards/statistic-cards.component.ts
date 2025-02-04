import { ConsultantsService } from '@/app/core/services/consultants.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'reviews-statistic-cards',
  standalone: true,
  imports: [NgbProgressbarModule, CommonModule],
  templateUrl: './statistic-cards.component.html',
  styles: ``,
})
export class StatisticCardsComponent implements OnInit {

  agent: any;
  totalSales: number = 0;
  constructor(private consultantsService:ConsultantsService, private route: ActivatedRoute,) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.consultantsService.getUserPortalById(id).subscribe(agent => {
          // console.log(agent);
          this.agent = agent;
          this.calculateTotalSales();
        });
      }
    });
  }
  calculateTotalSales() {
    if (this.agent && this.agent.serviceCounts) {
      const { flights, hotels, insurance, specialServices, transfers, excursions } = this.agent.serviceCounts;
      this.totalSales = flights + hotels + insurance + specialServices + transfers + excursions;
    }
  }

}
