import { Component, Input } from '@angular/core';
import { MenuItemWithChildrenComponent } from './components/vertical-menu-item-with-children.component'
import { MenuItemComponent } from './components/vertical-menu-item.component'
import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/app/helpers/menu';
import { MenuItemType } from '@/app/core/models';
import { bookingHomeMenuItems } from '@/assets/data';
import { basePath } from '@/app/store';
import { filter } from 'rxjs';
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
@Component({
  selector: 'app-header-vertical',
  standalone: true,
  imports: [MenuItemWithChildrenComponent, MenuItemComponent, RouterModule, LogoBoxComponent],
  templateUrl: './header-vertical.component.html',
  styleUrl: './header-vertical.component.scss'
})
export class HeaderVerticalComponent {
  @Input() menuItems!: MenuItemType[]

  constructor(private router: Router) {}

  activeMenuItems?: string[]
  bookingHomeMenuItems = bookingHomeMenuItems
  trimmedURL = this.router.url?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  matchingMenuItem: MenuItemType | undefined

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.trimmedURL = this.router.url
        this.initActiveMenu()
      })
    this.initActiveMenu()
  }

  initActiveMenu() {
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
  }

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems && this.activeMenuItems.includes(item.key)
      ? ' active'
      : ''
  }
}
