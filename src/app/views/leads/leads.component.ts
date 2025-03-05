import { LeadsService } from '@/app/core/services/leads.service'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss',
})
export class LeadsComponent implements OnInit {
  contacsArr: any[] = []
  constructor(private leadService: LeadsService) {
    this.leadService.getLeads
  }

  ngOnInit(): void {
    this.leadService.getLeads().subscribe((res: any) => {
      this.contacsArr = res.data
    })
  }
}
