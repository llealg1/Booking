import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video';
import { TinySliderSettings } from 'tiny-slider';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [LightgalleryModule, TinySliderComponent, CommonModule],
  templateUrl: './office.component.html',
  styleUrl: './office.component.scss'
})
export class OfficeComponent implements OnInit {
  @ViewChild('testimonialSlider', { static: false }) testimonialSlider: any;

  testimonialSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    controls: true,
    items: 1,
    autoplay: true,
  };

  settings = {
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
    download: false,
  };

  testimonialSlides: any[] = [
    {
      name: 'Madrid, España',
      description: 'Calle Alcalá 22, Piso 2 puerta DR',
      image: '../../../../../assets/images/sedes/madrid/madrid.jpg',
    },
    {
      name: 'Barcelona, España',
      description:
        'Business Center Pesseig de Grácia 5.0 Passeig de Grácia, 12, 10, 08007.',
      image: '../../../../../assets/images/sedes/barcelona/barcelona.jpg',
    },
  ];

  offices: any = {
    'venezuela': [
      { name: 'Caracas', phone: '+58 424-1542685', address: 'Av. Francisco de Miranda, Torre Cavendes, oficina 6-02.' },
      { name: 'Valencia', phone: '+58 424-4097684', address: 'Av. Bolívar Norte, Torre Majay, oficina principal.' },
      { name: 'Barquisimeto', phone: '+58 424-5239195', address: 'Av. Los Leones, CC. Los Leones, Local #24.' },
    ],
    'espana': [
      { name: 'Madrid', phone: '+34 655 20 45 86', address: 'Calle Alcalá 22. Piso 2, puerta DR. 28014. Madrid' },
      { name: 'Barcelona', phone: '+34 655205035', address: 'Calle Valencia 83 entresuelo. 08029' },
    ],
    'argentina': [
      { name: 'Buenos Aires', phone: '+54 1178543970', address: 'Lavalle 669 Local 12, C1047AAM Cdad. Autónoma de Buenos Aires' },
    ],
    'colombia': [
      { name: 'Bogotá', phone: '+57 313 8897876', address: 'Edificio Varese, calle 98 #18-7. Bogotá DC' },
      { name: 'Medellín', phone: '+57 323 3932626', address: 'El Poblado - Carrera 43 A # 5A - 113 One Plaza Bussines Center Piso 7 Int 713' },
    ],
    'estados-unidos': [
      { name: 'Miami', phone: '', address: '8350 nw 52ter Suite 301 doral Florida 33166 oficina 199.' },
    ],
    'panama': [
      { name: 'Panamá', phone: '', address: 'Av. Centenario, Torre Aseguradora Ancon, oficina 14K, Costa del Este, Panamá.' },
    ],
    'peru': [
      { name: 'Lima', phone: '+51 981 255 261', address: 'Centro Comercial Caminos del Inca, Avenida Caminos del Inca 257 – 269, 3er piso oficina 326.' },
    ],
    'chile': [
      { name: 'Santiago de Chile', phone: '+56 9 6141 4833', address: 'Serrano 73, torre Snap, piso 3 oficina 313. Stgo. Chile.' },
    ],
    'ecuador': [
      { name: 'Quito', phone: '+593 96 231 8390', address: 'Av. Moscú y Av. Noruega, Edificio Moscú Platz, piso 1, oficina 4.' },
    ],
  };

  selectedOffice: any;
  officeName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const officeName = params['name'];
      this.validateOffice(officeName);
    });
  }

  validateOffice(name: string) {
    if (this.offices[name.toLowerCase()]) {
      this.selectedOffice = this.offices[name.toLowerCase()];
      this.officeName = name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
    } else {
      // Handle invalid office name
      console.error('Invalid office name');
    }
  }
}
