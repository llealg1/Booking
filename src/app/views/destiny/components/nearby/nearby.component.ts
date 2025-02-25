import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home-nearby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nearby.component.html',
  styles: [],
})
export class NearbyComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  nearbyPlacesData = [
    {
      image: 'assets/images/bg/nube.png',
      name: 'San Francisco',
      travelTime: '13 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Los Angeles',
      travelTime: '25 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Miami',
      travelTime: '45 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Sanjosh',
      travelTime: '55 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'New York',
      travelTime: '1 hour drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'North Justen',
      travelTime: '2 hour drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Rio',
      travelTime: '20 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Las Vegas',
      travelTime: '3 hour drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Texas',
      travelTime: '55 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Chicago',
      travelTime: '13 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'New Keagan',
      travelTime: '35 min drive',
    },
    {
      image: 'assets/images/bg/nube.png',
      name: 'Oslo',
      travelTime: '1 hour 13 min drive',
    },
  ];

  selectedPlace: any;

  constructor(private modalService: NgbModal) {}

  openModal(index: number): void {
    this.selectedPlace = this.nearbyPlacesData[index];
    this.modalService.open(this.modalTemplate);
  }
}
