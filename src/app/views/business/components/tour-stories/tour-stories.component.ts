import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, ViewChild } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'tour-stories',
  standalone: true,
  imports: [LightgalleryModule, TinySliderComponent],
  templateUrl: './tour-stories.component.html',
  styleUrl: './tour-stories.component.scss',
})
export class TourStoriesComponent {
  @ViewChild('testimonialSlider', { static: false }) testimonialSlider: any

  testimonialSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    controls: true,
    items: 1,
    autoplay: true,
  }

  settings = {
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
    download: false,
  }

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
  ]
}
