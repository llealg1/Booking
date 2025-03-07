import { Route } from '@angular/router'
import { BlogComponent } from './blog.component'
import { BlogDetailComponent } from './detail/blog-detail.component'
export const BLOG_ROUTES: Route[] = [
  { path: '', component: BlogComponent, data: { title: 'Blog' } },
  {
    path: ':id', component: BlogDetailComponent, data: { title: 'Blog Detail' }
  }
]
