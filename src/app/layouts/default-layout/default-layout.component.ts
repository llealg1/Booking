import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { ChatComponent } from '@/app/views/chat/chat.component'
import { FloatWebElementsComponent } from './components/float-web-elements/float-web-elements.component'

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    FooterComponent,
    ChatComponent,
    FloatWebElementsComponent
  ],
  template: `
    <app-header [showExtraPages]="false" [showContactPages]="true" class="" />
    <router-outlet />
    <app-footer />
    <app-float-web-elements />
    <!-- <app-chat /> -->
  `,
})
export class DefaultLayoutComponent {}
