import { CommonModule } from '@angular/common'
import { Component, TemplateRef, ViewChild } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'home-nearby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nearby.component.html',
  styles: [],
})
export class NearbyComponent {
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>

  nearbyPlacesData = [
    {
      image: 'assets/images/planificaciones/miami.jpg',
      name: 'Miami',
      country: 'Estados Unidos',
    },
    {
      image: 'assets/images/planificaciones/paris.jpg',
      name: 'Paris',
      country: 'Francia',
    },
    {
      image: 'assets/images/planificaciones/madrid.jpg',
      name: 'Madrid',
      country: 'España',
    },
    {
      image: 'assets/images/planificaciones/barcelona.jpg',
      name: 'Barcelona',
      country: 'España',
    },
    {
      image: 'assets/images/planificaciones/milan.jpg',
      name: 'Milan',
      country: 'Italia',
    },
    {
      image: 'assets/images/planificaciones/dubai.jpg',
      name: 'Dubai',
      country: 'Emiratos Árabes Unidos',
    },
    {
      image: 'assets/images/planificaciones/bogota.jpg',
      name: 'Bogota',
      country: 'Colombia',
    },
    {
      image: 'assets/images/planificaciones/medellin.jpg',
      name: 'Medellin',
      country: 'Colombia',
    },
    {
      image: 'assets/images/planificaciones/lisboa.jpg',
      name: 'Lisboa',
      country: 'Portugal',
    },
    {
      image: 'assets/images/planificaciones/oporto.jpg',
      name: 'Oporto',
      country: 'Portugal',
    },
    {
      image: 'assets/images/planificaciones/buenosaires.png',
      name: 'Buenos Aires',
      country: 'Argentina',
    },
    {
      image: 'assets/images/planificaciones/roma.jpg',
      name: 'Roma',
      country: 'Italia',
    },
  ]

  selectedPlace: any

  constructor(private modalService: NgbModal) {}

  openModal(index: number): void {
    this.selectedPlace = this.nearbyPlacesData[index]
    this.modalService.open(this.modalTemplate)
  }
}
