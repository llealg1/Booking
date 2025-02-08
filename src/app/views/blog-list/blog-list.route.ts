import { Route } from '@angular/router'
import { BlogListComponent } from './blog-list.component'
export const BLOGLIST_ROUTES: Route[] = [
  {
    path: '',
    component: BlogListComponent,
    data: { title: 'Blog' },
  },
]
