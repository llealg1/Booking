import { Component, ViewChild } from '@angular/core'
import { TinySliderSettings } from 'tiny-slider'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { CommonModule } from '@angular/common'


@Component({
  selector: 'home-clients',
  standalone: true,
  imports: [TinySliderComponent, CommonModule],
  templateUrl: './clients.component.html',
  styles: ``,
})
export class ClientsComponent {
  @ViewChild('clientSlider', { static: false }) clientSlider: any

  clientSliderSetting: TinySliderSettings = {
    autoplay: true,
    edgePadding: 0,
    gutter: 80,
    arrowKeys: false,
    items: 5,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  }
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
