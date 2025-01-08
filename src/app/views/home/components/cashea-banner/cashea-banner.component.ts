import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-cashea-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cashea-banner.component.html',
  styleUrl: './cashea-banner.component.scss'
})
export class CasheaBannerComponent {
  isMobile: boolean = false

  constructor() {
    this.checkScreenSize()
  }
  ngOnInit(): void {
    this.checkScreenSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize()
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768 // Puedes ajustar el ancho según tus necesidades
    console.log(window.innerWidth)
    console.log(this.isMobile)
  }

}
