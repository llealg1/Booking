import { Component } from '@angular/core'

@Component({
  selector: 'home-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styles: ``,
})
export class ClientsComponent {
  clientList = [
    { id: 1, image: "assets/images/romadestino.png" },
    { id: 2, image: "assets/images/valenciadestino.png" },

  ]
}
