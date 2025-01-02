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
    this.consultantsService.getUsersPortal().subscribe((consultants) => {
      console.log(consultants)
      this.teamMembers = consultants.data
    })
  }
  ngOnInit() {
    console.log('TeamListComponent initialized')
  }


}
