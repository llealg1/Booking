import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { FlightCardComponent } from '../flight-card/flight-card.component'

@Component({
  selector: 'heroes-hero',
  standalone: true,
  imports: [SelectFormInputDirective, DateFormInputDirective,FlightCardComponent ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
