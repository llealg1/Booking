import { Component } from '@angular/core'
import { AgentWidgetCardComponent } from './components/agent-widget-card/agent-widget-card.component'
import { AgentInfoComponent } from './components/agent-info/agent-info.component'
import { StatisticCardsComponent } from './components/statistic-cards/statistic-cards.component'
import { BookingStatsComponent } from './components/booking-stats/booking-stats.component'
import { CouponComponent } from './components/coupon/coupon.component'
@Component({
  selector: 'app-advisors-detail',
  standalone: true,
  imports: [
    AgentWidgetCardComponent,
    AgentInfoComponent,
    StatisticCardsComponent,
    BookingStatsComponent,
    CouponComponent,
  ],
  templateUrl: './advisors-detail.component.html',
  styleUrl: './advisors-detail.component.scss',
})
export class AdvisorsDetailComponent {}
