import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { PlaceComponent } from './components/place/place.component'
import { CasheaBannerComponent } from "../home/components/cashea-banner/cashea-banner.component";

@Component({
  selector: 'app-destiny',
  standalone: true,
  imports: [HeroComponent, PlaceComponent, CasheaBannerComponent],
  templateUrl: './destiny.component.html',
  styleUrl: './destiny.component.scss',
})
export class DestinyComponent {}
