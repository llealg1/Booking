import { Component, OnInit, ViewChild, inject } from '@angular/core'
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
  Event,
} from '@angular/router'
import { BackToTopComponent } from './components/back-to-top.component'
import { NgProgressComponent, NgProgressModule } from 'ngx-progressbar'
import { TitleService } from './core/services/title.service'
import { AuthenticationService } from './core/services/auth.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackToTopComponent, NgProgressModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent
  private router = inject(Router)
  private titleService = inject(TitleService)

  constructor(private authService: AuthenticationService) {
    this.router.events.subscribe((event: Event) => {
      this.checkRouteChange(event)
    })

  }

  ngOnInit(): void {
    this.titleService.init()
    this.authService.validateToken()
  }

  // show Loader when route change
  checkRouteChange(routerEvent: Event) {
    // if (routerEvent instanceof NavigationStart) {
    //   this.progressBar.start()
    // }
    // if (
    //   routerEvent instanceof NavigationEnd ||
    //   routerEvent instanceof NavigationCancel ||
    //   routerEvent instanceof NavigationError
    // ) {
    //   setTimeout(() => {
    //     this.progressBar.complete()
    //   }, 200)
    // }
  }
}
