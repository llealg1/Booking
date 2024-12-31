import { Component } from '@angular/core'
import { TopbarComponent } from '../home/components/topbar/topbar.component'
import { MultipleTabsComponent } from './components/multiple-tabs/multiple-tabs.component'

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [TopbarComponent, MultipleTabsComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent {}
