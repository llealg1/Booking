import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'

@Component({
  selector: 'app-destiny',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './destiny.component.html',
  styleUrl: './destiny.component.scss',
})
export class DestinyComponent {}
