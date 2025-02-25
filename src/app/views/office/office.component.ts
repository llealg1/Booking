import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video';
import { TinySliderSettings } from 'tiny-slider';
import { ActivatedRoute, Router } from '@angular/router';
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

  offices: any = {
    venezuela: [
      { name: 'Caracas', title: 'Caracas', phone: '+58 424-1542685', address: 'Av. Francisco de Miranda, Torre Cavendes, oficina 6-02.', images: ['assets/images/sedes/caracas/caracas1.jpg', 'assets/images/sedes/caracas/caracas2.jpg', 'assets/images/sedes/caracas/caracas3.jpg'], images1: 'assets/images/sedes/caracas/caracas.jpg', images2: 'assets/images/sedes/caracas/caracas2.jpg', images3: 'assets/images/sedes/caracas/caracas3.jpg' },
      { name: 'Valencia', title: 'Valencia', phone: '+58 424-4097684', address: 'Av. Bolívar Norte, Torre Majay, oficina principal.', images: ['assets/images/sedes/valencia/valencia1.jpg', 'assets/images/sedes/valencia/valencia2.jpg', 'assets/images/sedes/valencia/valencia3.jpg'], images1: 'assets/images/sedes/valencia/valencia.jpg', images2: 'assets/images/sedes/valencia/valencia2.jpg', images3: 'assets/images/sedes/valencia/valencia3.jpg' },
      { name: 'Barquisimeto', title: 'Barquisimeto', phone: '+58 424-5239195', address: 'Av. Los Leones, CC. Los Leones, Local #24.', images: ['assets/images/sedes/barquisimeto/barquisimeto1.jpg', 'assets/images/sedes/barquisimeto/barquisimeto2.jpg', 'assets/images/sedes/barquisimeto/barquisimeto3.jpg'], images1: 'assets/images/sedes/barquisimeto/barquisimeto.jpg', images2: 'assets/images/sedes/barquisimeto/barquisimeto2.jpg', images3: 'assets/images/sedes/barquisimeto/barquisimeto3.jpg' },
    ],
    espana: [
      { name: 'Madrid', title: 'Madrid', phone: '+34 655 20 45 86', address: 'Calle Alcalá 22. Piso 2, puerta DR. 28014. Madrid', images: ['assets/images/sedes/madrid/madrid1.jpg', 'assets/images/sedes/madrid/madrid2.jpg', 'assets/images/sedes/madrid/madrid3.jpg'], images1: 'assets/images/sedes/madrid/madrid1.jpg', images2: 'assets/images/sedes/madrid/madrid2.jpg', images3: 'assets/images/sedes/madrid/madrid3.jpg' },
      { name: 'Barcelona', title: 'Barcelona', phone: '+34 655205035', address: 'Calle Valencia 83 entresuelo. 08029', images: ['assets/images/sedes/barcelona/barcelona1.jpg', 'assets/images/sedes/barcelona/barcelona2.jpg', 'assets/images/sedes/barcelona/barcelona3.jpg'], images1: 'assets/images/sedes/barcelona/barcelona1.jpg', images2: 'assets/images/sedes/barcelona/barcelona2.jpg', images3: 'assets/images/sedes/barcelona/barcelona3.jpg' },
    ],
    argentina: [
      { name: 'buenosaires', title: 'Buenos Aires', phone: '+54 1178543970', address: 'Lavalle 669 Local 12, C1047AAM Cdad. Autónoma de Buenos Aires', images: ['assets/images/sedes/buenos-aires/buenos-aires1.jpg', 'assets/images/sedes/buenos-aires/buenos-aires2.jpg', 'assets/images/sedes/buenos-aires/buenos-aires3.jpg'], images1: 'assets/images/sedes/buenosaires/buenosaires.jpg', images2: 'assets/images/sedes/buenos-aires/buenos-aires2.jpg', images3: 'assets/images/sedes/buenos-aires/buenos-aires3.jpg' },
    ],
    colombia: [
      { name: 'Bogota', title: 'Bogotá', phone: '+57 313 8897876', address: 'Edificio Varese, calle 98 #18-7. Bogotá DC', images: ['assets/images/sedes/bogota/bogota1.jpg', 'assets/images/sedes/bogota/bogota2.jpg', 'assets/images/sedes/bogota/bogota3.jpg'], images1: 'assets/images/sedes/bogota/bogota.jpg', images2: 'assets/images/sedes/bogota/bogota2.jpg', images3: 'assets/images/sedes/bogota/bogota3.jpg' },
      { name: 'Medellin', title: 'Medellín', phone: '+57 323 3932626', address: 'El Poblado - Carrera 43 A # 5A - 113 One Plaza Bussines Center Piso 7 Int 713', images: ['assets/images/sedes/medellin/medellin1.jpg', 'assets/images/sedes/medellin/medellin2.jpg', 'assets/images/sedes/medellin/medellin3.jpg'], images1: 'assets/images/sedes/medellin/medellin.jpg', images2: 'assets/images/sedes/medellin/medellin2.jpg', images3: 'assets/images/sedes/medellin/medellin3.jpg' },
    ],
    'estados-unidos': [
      { name: 'miami', title: 'Miami', phone: '', address: '8350 nw 52ter Suite 301 doral Florida 33166 oficina 199.', images: ['assets/images/sedes/miami/miami1.jpg', 'assets/images/sedes/miami/miami2.jpg', 'assets/images/sedes/miami/miami3.jpg'], images1: 'assets/images/sedes/miami/miami.jpg', images2: 'assets/images/sedes/miami/miami2.jpg', images3: 'assets/images/sedes/miami/miami3.jpg' },
    ],
    panama: [
      { name: 'panama', title: 'Panamá', phone: '', address: 'Av. Centenario, Torre Aseguradora Ancon, oficina 14K, Costa del Este, Panamá.', images: ['assets/images/sedes/panama/panama1.jpg', 'assets/images/sedes/panama/panama2.jpg', 'assets/images/sedes/panama/panama3.jpg'], images1: 'assets/images/sedes/panama/panama.jpg', images2: 'assets/images/sedes/panama/panama2.jpg', images3: 'assets/images/sedes/panama/panama3.jpg' },
    ],
    peru: [
      { name: 'Lima', title: 'Lima', phone: '+51 981 255 261', address: 'Centro Comercial Caminos del Inca, Avenida Caminos del Inca 257 – 269, 3er piso oficina 326.', images: ['assets/images/sedes/lima/lima1.jpg', 'assets/images/sedes/lima/lima2.jpg', 'assets/images/sedes/lima/lima3.jpg'], images1: 'assets/images/sedes/lima/lima.jpg', images2: 'assets/images/sedes/lima/lima2.jpg', images3: 'assets/images/sedes/lima/lima3.jpg' },
    ],
    chile: [
      { name: 'santiago', title: 'Santiago de Chile', phone: '+56 9 6141 4833', address: 'Serrano 73, torre Snap, piso 3 oficina 313. Stgo. Chile.', images: ['assets/images/sedes/santiago/santiago1.jpg', 'assets/images/sedes/santiago/santiago2.jpg', 'assets/images/sedes/santiago/santiago3.jpg'], images1: 'assets/images/sedes/santiago/santiago.jpg', images2: 'assets/images/sedes/santiago/santiago2.jpg', images3: 'assets/images/sedes/santiago/santiago3.jpg' },
    ],
    ecuador: [
      { name: 'quito', title: 'Quito', phone: '+593 96 231 8390', address: 'Av. Moscú y Av. Noruega, Edificio Moscú Platz, piso 1, oficina 4.', images: ['assets/images/sedes/quito/quito1.jpg', 'assets/images/sedes/quito/quito2.jpg', 'assets/images/sedes/quito/quito3.jpg'], images1: 'assets/images/sedes/quito/quito.jpg', images2: 'assets/images/sedes/quito/quito.jpg', images3: 'assets/images/sedes/quito/quito3.jpg' },
    ],
  };

  selectedOffice: any;
  officeName: string = '';
  filteredTestimonialSlides: any[] = [];
  flattenedOffices: any[] = [];
  testimonialSlides: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const officeName = params['name'];
      this.validateOffice(officeName);
    });

    this.route.queryParams.subscribe(queryParams => {
      const country = queryParams['country'];
      this.filterTestimonialSlides(country);
    });

    this.flattenedOffices = this.flattenOffices();
    this.testimonialSlides = this.generateTestimonialSlides();
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

  filterTestimonialSlides(country: string) {
    if (country) {
      this.filteredTestimonialSlides = this.testimonialSlides.filter(slide => slide.country.toLowerCase() === country.toLowerCase());
    } else {
      this.filteredTestimonialSlides = this.testimonialSlides;
    }

    if (this.selectedOffice) {
      this.filteredTestimonialSlides = this.filteredTestimonialSlides.filter(slide => this.selectedOffice.some((office: any) => office.title === slide.name));
    }
  }

  flattenOffices() {
    const flattened = [];
    for (const country in this.offices) {
      if (this.offices.hasOwnProperty(country)) {
        flattened.push(...this.offices[country]);
      }
    }
    return flattened;
  }

  generateTestimonialSlides() {
    const slides:any = [];
    for (const country in this.offices) {
      if (this.offices.hasOwnProperty(country)) {
        this.offices[country].forEach((office: any) => {
          if (this.selectedOffice && this.selectedOffice.some((selected: any) => selected.title === office.title)) {
            slides.push({
              name: office.title,
              description: office.address,
              image: office.images1,
              country: country
            });
          }
        });
      }
    }
    return slides;
  }
}
