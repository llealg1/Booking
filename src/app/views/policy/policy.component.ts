import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { NavbarComponent } from '../../layouts/help-layout/components/navbar/navbar.component'

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [HeroComponent, NavbarComponent],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss',
})
export class PolicyComponent {}
