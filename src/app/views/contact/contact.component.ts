import { Component } from '@angular/core';
import { Contact2Component } from '../contact/components/contact-2/contact-2.component';
import { TopbarComponent } from '../home/components/topbar/topbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Contact2Component, TopbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
