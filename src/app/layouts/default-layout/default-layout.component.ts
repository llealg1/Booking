import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, FooterComponent],
  template: `
    <app-header/>
    <router-outlet />
    <app-footer/>
  `,
})
export class DefaultLayoutComponent {}
