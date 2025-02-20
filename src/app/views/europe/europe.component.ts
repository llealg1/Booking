import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { last } from 'rxjs';
import { CountryService } from '@/app/core/services/country.service';
import { ContactService } from '@/app/core/services/contact.service';
import { TinySliderSettings } from 'tiny-slider';
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component';
import { ConfirmTicketComponent } from './components/confirm-ticket/confirm-ticket.component';

type OurStoryType = {
  title: string;
  description: string;
  icon: string;
  variant: string;
};

type TestimonialType = {
  title: string;
  description: string;
  image: string;
};

const testimonialData: TestimonialType[] = [
  {
    title: 'Asesoría Personalizada',
    description: 'Te ayudamos a encontrar el mejor vuelo.',
    image: 'assets/images/asesoria.jpg',
  },
  {
    title: 'Seguro de viajes',
    description: 'Obtén una póliza para imprevistos del viaje.',
    image: 'assets/images/seguro.jpg',
  },
  {
    title: 'Financiamiento Disponible',
    description: 'Paga tu boleto en cómodas cuotas y viaja sin estrés.',
    image: 'assets/images/financiamiento.jpg',
  },
  {
    title: 'Promociones y Ofertas',
    description:
      'Accede a tarifas especiales que no encontrarás en otros sitios.',
    image: 'assets/images/promocion.jpg',
  },
  {
    title: 'eSIM para Viajeros',
    description:
      'Conéctate a internet desde el momento en que aterrizas sin costo.',
    image: 'assets/images/esim.jpg',
  },
  {
    title: 'Código de referidos',
    description: 'Viaja con nosotros y gana puntos viajeros recomendándono',
    image: 'assets/images/referidos.jpg',
  },
];

@Component({
  selector: 'app-europe',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TinySliderComponent,
    ConfirmTicketComponent,
  ],
  templateUrl: './europe.component.html',
  styleUrl: './europe.component.scss',
})
export class EuropeComponent {
  contactForm!: UntypedFormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  successMessage: string = '';

  private fb = inject(UntypedFormBuilder);
  private router = inject(Router);
  private contactService = inject(ContactService);

  destinations: any;

  constructor(private countryService: CountryService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      description: ['', [Validators.required]],
      subject: ['', [Validators.required]],
    });
    this.countryService.getCountry().subscribe((rest) => {
      this.destinations = rest.data.map((data: any) => {
        return {
          label: data.name,
          value: data.id,
        };
      });
    });
  }

  get form() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

      this.loading = true;
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
        (response) => {
          this.loading = false;
          this.successMessage = 'Formulario enviado con éxito!';
          setTimeout(() => {
            this.router.navigate(['europe/europe-congratulation']);
          }, 2000);
        },
        (error) => {
          this.loading = false;
        }
      );

  }

  storyList: OurStoryType[] = [
    {
      title: 'Precios exclusivos en boletos aéreos.',
      description:
        'Accede a tarifas preferenciales y promociones especiales en vuelos a los mejores destinos.',
      icon: 'bi bi-airplane',
      variant: 'bg-orange text-orange',
    },
    {
      title: 'Asesoría 100% personalizada.',
      description:
        'Te guiamos en cada paso para encontrar el viaje ideal según tus necesidades y presupuesto.',
      icon: 'bi bi-luggage',
      variant: 'bg-success text-success',
    },
    {
      title: 'Financiamiento disponible.',
      description:
        'Viaja ahora y paga en cómodas cuotas con nuestras opciones de financiamiento flexibles.',
      icon: 'bi bi-credit-card',
      variant: 'bg-primary text-primary',
    },
    {
      title: 'Compra segura y garantizada.',
      description:
        'Reserva con total confianza, con protección y respaldo en cada compra.',
      icon: 'bi bi-bag-check',
      variant: 'bg-info text-info',
    },
  ];

  experienceList = testimonialData;

  @ViewChild('experienceSlider', { static: false }) experienceSlider: any;

  experienceSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    autoplay: true,
    controls: true,
    items: 4,
    autoplayDirection: 'forward',
    responsive: {
      1: {
        items: 1,
        gutter: 10,
      },
      768: {
        items: 2,
        gutter: 10,
      },
      992: {
        items: 3,
        gutter: 30,
      },
      1200: {
        items: 4,
        gutter: 30,
      },
    },
  };
}
