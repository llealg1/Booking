import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { TeamListComponent } from './components/team-list/team-list.component';
@Component({
  selector: 'app-advisors',
  standalone: true,
  imports: [HeroComponent, TeamListComponent],
  templateUrl: './advisors.component.html',
  styleUrl: './advisors.component.scss'
})
export class AdvisorsComponent {

}
