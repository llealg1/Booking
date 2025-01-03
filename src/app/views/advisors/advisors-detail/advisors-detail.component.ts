import { Component } from '@angular/core';
import { AgentWidgetCardComponent } from './components/agent-widget-card/agent-widget-card.component';
import { AgentInfoComponent } from './components/agent-info/agent-info.component';
@Component({
  selector: 'app-advisors-detail',
  standalone: true,
  imports: [AgentWidgetCardComponent,AgentInfoComponent],
  templateUrl: './advisors-detail.component.html',
  styleUrl: './advisors-detail.component.scss'
})
export class AdvisorsDetailComponent {

}
