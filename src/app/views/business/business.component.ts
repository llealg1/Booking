import { Component } from '@angular/core'
import { MultipleTabsComponent } from './components/multiple-tabs/multiple-tabs.component'
import { PeopleTabsComponent } from './components/people-tabs/people-tabs.component'
import { TourStoriesComponent } from './components/tour-stories/tour-stories.component'

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [
    MultipleTabsComponent,
    PeopleTabsComponent,
    TourStoriesComponent,
  ],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent {}
