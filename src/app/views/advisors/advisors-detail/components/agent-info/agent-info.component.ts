import { Component, OnInit } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { ConsultantsService } from '../../../../../core/services/consultants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-info',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './agent-info.component.html',
  styles: ``,
})
export class AgentInfoComponent implements OnInit {
  agent: any;

  constructor(private consultantsService:ConsultantsService, private route: ActivatedRoute,) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.consultantsService.getUserPortalById(id).subscribe(agent => {
          this.agent = agent;
        });
      }
    });
  }
}
