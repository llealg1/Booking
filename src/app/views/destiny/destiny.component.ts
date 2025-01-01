import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { TopbarComponent } from '../home/components/topbar/topbar.component'

@Component({
  selector: 'app-destiny',
  standalone: true,
  imports: [TopbarComponent, HeroComponent],
  templateUrl: './destiny.component.html',
  styleUrl: './destiny.component.scss',
})
export class DestinyComponent {}
