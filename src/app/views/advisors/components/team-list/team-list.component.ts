import { Component, OnInit } from '@angular/core'
// import { teamMembers } from '../../data'
import { ConsultantsService } from '../../../../core/services/consultants.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'our-team-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team-list.component.html',
  styles: ``,
})
export class TeamListComponent implements OnInit {
  teamMembers:any[] = [

  ]

  constructor(private consultantsService: ConsultantsService) {

  }
  ngOnInit() {
    const startDate = this.getFirstDayOfMonth();
    const endDate = this.getLastDayOfMonth();
    this.consultantsService.getUsersPortalHome(startDate, endDate).subscribe((consultants) => {
      console.log(consultants)
      this.teamMembers = consultants
    })
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




}
