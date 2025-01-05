import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { PlaceComponent } from './components/place/place.component'

@Component({
  selector: 'app-destiny',
  standalone: true,
  imports: [HeroComponent, PlaceComponent],
  templateUrl: './destiny.component.html',
  styleUrl: './destiny.component.scss',
})
export class DestinyComponent {}
