import { ChartOptions } from '@/app/core/models/apexchart.model';
import { ConsultantsService } from '@/app/core/services/consultants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'dashboard-booking-traffic',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './booking-traffic.component.html',
  styles: ``,
})
export class BookingTrafficComponent implements OnInit {
  agent: any;
  trafficChart: Partial<ChartOptions> = {};

  constructor(private consultantsService: ConsultantsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.consultantsService.getUserPortalById(id).subscribe((agent) => {
          // console.log(agent);
          this.agent = agent;
          this.updateChart();
        });
      }
    });
  }

  getRootColor = (color: string): string => {
    const selector = document.querySelector(':root');
    if (selector) return window.getComputedStyle(selector).getPropertyValue(color);
    else return '#5143d9';
  };

  updateChart() {
    if (this.agent && this.agent.serviceCounts) {
      const { flights, hotels, insurance, specialServices, transfers, excursions } = this.agent.serviceCounts;
      this.trafficChart = {
        series: [flights, hotels, insurance, specialServices, transfers, excursions],
        labels: ['Flights', 'Hotels', 'Insurance', 'Special Services', 'Transfers', 'Excursions'],
        chart: {
          height: 200,
          width: 200,
          offsetX: 0,
          type: 'donut',
          sparkline: {
            enabled: true,
          },
        },
        colors: [
          this.getRootColor('--bs-primary'),
          this.getRootColor('--bs-success'),
          this.getRootColor('--bs-warning'),
          this.getRootColor('--bs-danger'),
          this.getRootColor('--bs-info'),
          this.getRootColor('--bs-secondary'),
        ],
        plotOptions: {
          pie: {
            donut: {
              size: '70%',
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          position: 'bottom',
        },
      };
    }
  }
}
