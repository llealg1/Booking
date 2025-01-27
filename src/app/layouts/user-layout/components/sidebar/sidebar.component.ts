import { VerticalAppMenuComponent } from '@/app/components/app-menu/components/vertical-app-menu/vertical-app-menu.component'
import { AuthenticationService } from '@/app/core/services/auth.service'
import { USER_PROFILE_MENU_ITEMS } from '@/assets/data'
import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { filter } from 'rxjs'
import { Store } from '@ngrx/store';
import { AuthenticationState } from '@/app/store/authentication/authentication.reducer'
import { logout } from '@/app/store/authentication/authentication.actions'
import { getUser } from '@/app/store/authentication/authentication.selector'

@Component({
  selector: 'user-sidebar',
  standalone: true,
  imports: [RouterModule, VerticalAppMenuComponent, CommonModule],
  template: `
    <div class="card-body p-3">
      <div class="text-center mb-3">
        <div class="avatar avatar-xl mb-2">
          <img
            class="avatar-img rounded-circle border border-2 border-white"
            src="assets/images/logosArcadia/venezuela.jpg"
            alt=""
          />
        </div>
        <h6 class="mb-0">{{ this.clientMe?.name  + " " + this.clientMe?.last_name }}</h6>
        <a
          href="javascript:void(0);"
          class="text-reset text-primary-hover small"
          >{{ this.clientMe?.email || ""}}</a
        >
        <hr />
      </div>

      <ul class="nav nav-pills-primary-soft flex-column">
        @for (item of usermenuItems; track $index) {
          <li class="nav-item">
            <a
              class="nav-link"
              [ngClass]="{
                active:
                  currentPath === item.url ||
                  ($index === 0 && currentPath === null)
              }"
              [routerLink]="item.url"
              ><i class="{{ item.icon }} fa-fw me-2"></i>{{ item.label }}</a
            >
          </li>
        }
        <li class="nav-item">
          <button
            class="nav-link text-danger bg-danger-soft-hover" (click)="onLogout()"

            ><i class="fas fa-sign-out-alt fa-fw me-2"></i>Cerrar Sesion</button>

        </li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class SidebarComponent implements OnInit {
  public offcanvse = inject(NgbOffcanvas)

  usermenuItems = USER_PROFILE_MENU_ITEMS

  currentPath: string | null = null
  clientMe: any
  offcanvasService = inject(NgbOffcanvas)
  isOffcanvasOpen: boolean = false

  constructor(private router: Router, private authenticationService:AuthenticationService, private store:Store<AuthenticationState>) {}

  ngOnInit(): void {
    this.currentPath = this.router.url
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects
      })


      this.store.select(getUser).subscribe((data) => {
        this.clientMe = data
      })

  }

  onLogout() {
    this.authenticationService.logout().subscribe(() => {})

  }


}
