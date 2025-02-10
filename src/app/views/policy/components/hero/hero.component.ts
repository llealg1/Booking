import { Component } from '@angular/core'
import { Step1Component } from '../step1/step1.component'
import { Step2Component } from '../step2/step2.component'
import { Step3Component } from '../step3/step3.component'
import { Step4Component } from '../step4/step4.component'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'service-hero',
  standalone: true,
  imports: [
    NgbNavModule,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
  ],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
