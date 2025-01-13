import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { JarallaxDirective } from '@/app/directives/jarallax-directive.component'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { JarallaxOptions } from 'jarallax'

@Component({
  selector: 'directories-hero',
  standalone: true,
  imports: [SelectFormInputDirective, NgbDropdownModule, JarallaxDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  jarallaxConfig: JarallaxOptions = {
    speed: 0.4,
    videoSrc: 'youtube.com/watch?v=kcfs1-ryKWE',
    videoPlayOnlyVisible: true,
    videoLazyLoading: true,
    videoEndTime: 60,
  }
}
