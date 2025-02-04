import { ConsultantsService } from '@/app/core/services/consultants.service';
import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-widget-card',
  standalone: true,
  imports: [],
  templateUrl: './agent-widget-card.component.html',
  styles: ``,
})
export class AgentWidgetCardComponent {

  statisticsData = [
    {
      title: 'Total Hotels',
      stat: '04',
      icon: 'fa-hotel',
      variant: 'primary',
    },
    {
      title: 'Booking this month',
      stat: '56',
      icon: 'fa-calendar-days',
      variant: 'warning',
    },
    {
      title: 'Earning this month',
      stat:  '2486.95',
      icon: 'fa-money-bill-trend-up',
      variant: 'success',
    },
  ]

    agent: any;

    constructor(private consultantsService:ConsultantsService, private route: ActivatedRoute,) {}

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.consultantsService.getUserPortalById(id).subscribe(agent => {
            // console.log(agent);
            // this.statisticsData = agent;
          });
        }
      });
    }
}
