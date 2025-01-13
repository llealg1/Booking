import { ChartOptions } from '@/app/core/models/apexchart.model'
import { Component, OnInit } from '@angular/core'
import { NgApexchartsModule } from 'ng-apexcharts'
import { BookingTrafficComponent } from '../booking-traffic/booking-traffic.component'
import { ConsultantsService } from '@/app/core/services/consultants.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'dashboard-booking-stats',
  standalone: true,
  imports: [NgApexchartsModule, BookingTrafficComponent],
  templateUrl: './booking-stats.component.html',
  styles: ``,
})
export class BookingStatsComponent implements OnInit {
  agent: any;
  chartOpts: Partial<ChartOptions> = {
    colors: ['#2163e8'],
    series: [
      {
        name: 'Users',
        data: [100, 401, 305, 501, 409, 602, 609, 901, 848, 602, 809, 901],
      },
    ],
    chart: {
      height: 320,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    grid: {
      strokeDashArray: 4,
      position: 'back',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
      show: true,
      horizontalAlign: 'right',
      position: 'top',
      labels: {},
      markers: {
        width: 8,
        height: 8,
      },
    },
    xaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  }

    constructor(private consultantsService:ConsultantsService, private route: ActivatedRoute,) {}
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.consultantsService.getUserPortalById(id).subscribe(agent => {
            console.log(agent);
            this.agent = agent;

          });
        }
      });
    }
}
