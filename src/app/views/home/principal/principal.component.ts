import { Component } from '@angular/core';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { TestimonialSliderComponent } from '../components/testimonial-slider/testimonial-slider.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionBoxComponent } from '../components/action-box/action-box.component';
import { HeroComponent } from '../components/hero/hero.component';
@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    TopbarComponent,
    TestimonialSliderComponent,
    NgbAlertModule,
    ActionBoxComponent,
    HeroComponent
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  staticAlert = true
  promoAlert = true
}
