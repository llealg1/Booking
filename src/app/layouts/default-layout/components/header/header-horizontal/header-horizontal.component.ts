import { MenuItemType } from '@/app/core/models'
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

@Component({
  selector: 'app-header-horizontal',
  standalone: true,
  imports: [MenuItemWithChildrenComponent, MenuItemComponent, RouterLink],
  templateUrl: './header-horizontal.component.html',
  styleUrl: './header-horizontal.component.scss',
})
export class HeaderHorizontalComponent implements OnInit {
  @Input() showExtraPages?: boolean
  @Input() showContactPages?: boolean
  @Input() startBookingMenu?: boolean
  @Input() menuClassName?: string
  @Input() menuItems!: MenuItemType[]

  constructor(private router: Router) {}
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
