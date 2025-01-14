import { MenuItemType, User } from '@/app/core/models'
import {
  findAllParent,
  findMenuItem,
  getMenuItemFromURL,
} from '@/app/helpers/menu'
import { basePath } from '@/app/store'
import { bookingHomeMenuItems } from '@/assets/data'
import { Component, Input, OnInit } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { MenuItemWithChildrenComponent } from './components/horizontal-menu-item-with-children.component'
import { MenuItemComponent } from './components/horizontal-menu-item.component'
import { ProfileDropdownComponent } from "../../../../../components/top-bar/profile-dropdown/profile-dropdown.component";
import { AuthenticationState } from '@/app/store/authentication/authentication.reducer'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { getisLoggedIn, getUser } from '@/app/store/authentication/authentication.selector'
import { CommonModule } from '@angular/common'
import { NotificationDropdownComponent } from "../../../../../components/top-bar/notification-dropdown/notification-dropdown.component";

@Component({
  selector: 'app-header-horizontal',
  standalone: true,
  imports: [MenuItemWithChildrenComponent, MenuItemComponent, RouterLink, ProfileDropdownComponent, CommonModule, NotificationDropdownComponent],
  templateUrl: './header-horizontal.component.html',
  styleUrl: './header-horizontal.component.scss',
})
export class HeaderHorizontalComponent implements OnInit {
  @Input() showExtraPages?: boolean
  @Input() showContactPages?: boolean
  @Input() startBookingMenu?: boolean
  @Input() menuClassName?: string
  @Input() menuItems!: MenuItemType[]
  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router,private store: Store<AuthenticationState>) {
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getisLoggedIn);
    console.log('////')
    console.log(this.user$)
    console.log(this.isLoggedIn$)
  }
  ngOnInit(): void {
    if (this.menuItems)
      this.matchingMenuItem = getMenuItemFromURL(
        this.menuItems,
        this.trimmedURL
      )

    if (this.matchingMenuItem) {
      const activeMt = findMenuItem(this.menuItems, this.matchingMenuItem.key)
      if (activeMt) {
        this.activeMenuItems = [
          activeMt.key,
          ...findAllParent(this.menuItems, activeMt),
        ]
      }
    }

    console.log(this.user$)
    console.log(this.isLoggedIn$)
  }
  activeMenuItems?: string[]
  bookingHomeMenuItems = bookingHomeMenuItems
  trimmedURL = this.router.url?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  matchingMenuItem: MenuItemType | undefined

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems && this.activeMenuItems.includes(item.key)
      ? ' active'
      : ''
  }
}
