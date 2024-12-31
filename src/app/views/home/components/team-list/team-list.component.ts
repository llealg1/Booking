import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
const avatar1 = 'assets/images/carmelo.png'
const avatar2 = 'assets/images/melani.png'
const avatar3 = 'assets/images/pierina.png'


import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'our-team-list',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  templateUrl: './team-list.component.html',
  styles: ``,
})
export class TeamListComponent implements OnInit {
  memberList: any[] = [
    {
      name: 'Dennis Barrett',
      position: 'UK Tourist Guide',
      image: avatar1,
    },
    {
      name: 'Jacqueline Miller',
      position: 'Us Tourist Guide',
      image: avatar2,
    },
    {
      name: 'Larry Lawson',
      position: 'Editor in Chief',
      image: avatar3,
    },
  ]

  chunkedMemberList: any[][] = [];

  ngOnInit() {
    this.chunkedMemberList = this.chunkArray(this.memberList, 5);
  }


  chunkArray(myArray: any[], chunk_size: number): any[][] {
    const results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }
}
