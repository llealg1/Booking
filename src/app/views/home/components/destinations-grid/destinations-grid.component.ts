import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, ViewChild } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { TinySliderSettings } from 'tiny-slider'
const hotel1 = 'assets/images/category/hotel/4by3/01.jpg'
const hotel2 = 'assets/images/category/hotel/4by3/02.jpg'
const hotel3 = 'assets/images/category/hotel/4by3/03.jpg'
const hotel4 = 'assets/images/category/hotel/4by3/04.jpg'
const hotel5 = 'assets/images/category/hotel/4by3/05.jpg'
const hotel7 = 'assets/images/category/hotel/4by3/07.jpg'
const hotel8 = 'assets/images/category/hotel/4by3/08.jpg'
const hotel9 = 'assets/images/category/hotel/4by3/09.jpg'
const hotel10 = 'assets/images/category/hotel/4by3/10.jpg'
@Component({
  selector: 'app-destinations-grid',
  standalone: true,
  imports: [
    TinySliderComponent,
    CommonModule,
    NgbPaginationModule,
    RouterModule,
  ],
  templateUrl: './destinations-grid.component.html',
  styleUrl: './destinations-grid.component.scss',
})
export class DestinationsGridComponent {
  gridData = [
    {
      id: 1,
      name: 'Madrid',
      sale: '30% Off',
      images: [hotel9, hotel2, hotel3, hotel1],
      rating: 4.5,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 750,
      description:
        'Descubre la vibrante capital de España, llena de historia, cultura y vida nocturna.',
    },
    {
      id: 2,
      name: 'Barcelona',
      sale: '20% Off',
      images: [hotel10],
      rating: 4,
      feature: ['Air Conditioning', 'Wifi', 'Pool', 'Kitchen'],
      price: 1200,
      description:
        'Explora la ciudad de Gaudí, con su arquitectura única y hermosas playas.',
    },
    {
      id: 3,
      name: 'Paris',
      images: [hotel8],
      rating: 4.8,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 980,
      bookmark: true,
      description:
        'La ciudad del amor, famosa por su arte, moda y la icónica Torre Eiffel.',
    },
    {
      id: 4,
      name: 'Roma',
      images: [hotel7],
      rating: 4.8,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 1400,
      bookmark: true,
      description:
        'Sumérgete en la historia antigua con monumentos como el Coliseo y el Vaticano.',
    },
    {
      id: 5,
      name: 'Londres',
      images: [hotel2],
      rating: 4.5,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 680,
      description:
        'Una metrópolis moderna con una rica historia, museos y el famoso Big Ben.',
    },
    {
      id: 6,
      name: 'Nueva York',
      images: [hotel5],
      rating: 4.4,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 740,
      description: 'La ciudad que nunca duerme, llena de rascacielos.',
    },
  ]
  currencyType = currency

  @ViewChild('gridSlider', { static: false }) gridSlider: any

  gridSliderSetting: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    controls: true,
    items: 1,
  }
}
