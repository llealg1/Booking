import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { JarallaxDirective } from '@/app/directives/jarallax-directive.component'
import { Component, ViewChild } from '@angular/core'
import type { JarallaxOptions } from 'jarallax'
import type { TinySliderSettings } from 'tiny-slider'

@Component({
  selector: 'banner-home',
  standalone: true,
  imports: [TinySliderComponent, JarallaxDirective],
  templateUrl: './banner.component.html',
  styles: ``,
})
export class BannerHomeComponent {
  @ViewChild('bannerSlider', { static: false }) bannerSlider: any

  bannerSliderSettings: TinySliderSettings = {
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplay: true,
    controls: true,
    edgePadding: 0,
    items: 1,
    gutter: 0,
    nav: false,

    controlsText: [
       '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],

  }

  jarallaxConfig: JarallaxOptions = {
    speed: 0.4,
    videoSrc: 'https://youtu.be/OXU0YcrfvFc',
    videoPlayOnlyVisible: true,
    videoLazyLoading: true,
    videoEndTime: 60,

  }
}
