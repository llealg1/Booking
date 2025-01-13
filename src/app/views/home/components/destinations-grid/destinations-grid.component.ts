import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component';
import { currency } from '@/app/store';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TinySliderSettings } from 'tiny-slider';
const hotel1  = 'assets/images/category/hotel/4by3/01.jpg'
const hotel2  = 'assets/images/category/hotel/4by3/02.jpg'
const hotel3  = 'assets/images/category/hotel/4by3/03.jpg'
const hotel4  = 'assets/images/category/hotel/4by3/04.jpg'
const hotel5  = 'assets/images/category/hotel/4by3/05.jpg'
const hotel7  = 'assets/images/category/hotel/4by3/07.jpg'
const hotel8  = 'assets/images/category/hotel/4by3/08.jpg'
const hotel9  = 'assets/images/category/hotel/4by3/09.jpg'
const hotel10 = 'assets/images/category/hotel/4by3/10.jpg'
@Component({
  selector: 'app-destinations-grid',
  standalone: true,
  imports: [
    TinySliderComponent,
    CommonModule,
    NgbPaginationModule,
    RouterModule
  ]
  ,
  templateUrl: './destinations-grid.component.html',
  styleUrl: './destinations-grid.component.scss'
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
    },
    {
      id: 2,
      name: 'Barcelona',
      sale: '20% Off',
      images: [hotel10],
      rating: 4,
      feature: ['Air Conditioning', 'Wifi', 'Pool', 'Kitchen'],
      price: 1200,
    },
    {
      id: 3,
      name: 'Paris',
      images: [hotel8],
      rating: 4.8,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 980,
      bookmark: true,
    },
    {
      id: 4,
      name: 'Rome',
      images: [hotel7],
      rating: 4.8,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 1400,
      bookmark: true,
    },
    {
      id: 5,
      name: 'London',
      images: [hotel2],
      rating: 4.5,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 680,
    },
    {
      id: 6,
      name: 'New York',
      images: [hotel5],
      rating: 4.4,
      feature: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
      price: 740,
    }
  ];
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
