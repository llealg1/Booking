import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analitycs-home-action-box',
  standalone: true,
  imports: [],
  templateUrl: './action-box.component.html',
  styles: ``,
})
export class ActionBoxAnalitycsComponent implements OnInit {
  travelers: number = 0;
  destinations: number = 0;
  advisories: number = 0;
  bookings: number = 0;

  ngOnInit(): void {
    this.incrementNumber('travelers', 45740, 457);
    this.incrementNumber('destinations', 50, 1);
    this.incrementNumber('advisories', 350, 3);
    this.incrementNumber('bookings', 25861, 258);
  }

  incrementNumber(property: 'travelers' | 'destinations' | 'advisories' | 'bookings', target: number, increment: number): void {
    const interval = setInterval(() => {
      (this[property] as number) += increment;
      if ((this[property] as number) >= target) {
        this[property] = target;
        clearInterval(interval);
      }
    }, 50); // Ajusta este valor para cambiar la frecuencia del incremento
  }
}
