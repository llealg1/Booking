import { Component } from '@angular/core';
import { Contact2Component } from '../contact/components/contact-2/contact-2.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Contact2Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
