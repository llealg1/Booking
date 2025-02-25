import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { PlaceComponent } from './components/place/place.component'
import { CasheaBannerComponent } from '../home/components/cashea-banner/cashea-banner.component'
import { NearbyComponent } from './components/nearby/nearby.component'

@Component({
  selector: 'app-destiny',
  standalone: true,
  imports: [
    HeroComponent,
    PlaceComponent,
    CasheaBannerComponent,
    NearbyComponent,
  ],
  templateUrl: './destiny.component.html',
  styleUrl: './destiny.component.scss',
})
export class DestinyComponent {}
