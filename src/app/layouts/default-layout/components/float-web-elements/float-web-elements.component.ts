import { Component } from '@angular/core'
import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-float-web-elements',
  standalone: true,
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
  templateUrl: './float-web-elements.component.html',
  styleUrl: './float-web-elements.component.scss',
})
export class FloatWebElementsComponent {}
