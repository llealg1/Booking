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
    { id: 4, image: "assets/images/proveedores/AVIOR.png" },
    { id: 5, image: "assets/images/proveedores/BT-TRAVEL.png" },
    { id: 6, image: "assets/images/proveedores/ESTELAR.png" },
    { id: 7, image: "assets/images/proveedores/EXPEDIA-1.png" },
    { id: 8, image: "assets/images/proveedores/FVF.png" },
    { id: 9, image: "assets/images/proveedores/INTERWELT.png" },
    { id: 10, image: "assets/images/proveedores/VIRAmundo.png" },
    { id: 11, image: "assets/images/proveedores/vivitatis.png" },
  ];
}
