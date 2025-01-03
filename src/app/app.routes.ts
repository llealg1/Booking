import { Routes } from '@angular/router'
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component'
import { HelpLayoutComponent } from './layouts/help-layout/help-layout.component'
import { AgentLayoutComponent } from './layouts/agent-layout/agent-layout.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { AuthGuard } from './core/guards'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/home/home.route').then((mod) => mod.HOME_ROUTES),
  },
  {
    path: 'promotions',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/promotions/promotions.route').then(
        (mod) => mod.PROMOTIONS_ROUTES
      ),
  },
  {
    path: 'business',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/business/business.route').then(
        (mod) => mod.BUSINESS_ROUTES
      ),
  },
  {
    path: 'contact',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/contact/contact.route').then(
        (mod) => mod.CONTACT_ROUTES
      ),
  },
  {
    path: 'advisors',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./views/advisors/advisors.route').then((mod) => mod.ADVISORS_ROUTES),
  },
  {
    path: 'destiny',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/destiny/destiny.route').then((mod) => mod.DESTINY_ROUTES),
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserLayoutComponent,
    loadChildren: () =>
      import('./views/user/user.route').then((mod) => mod.USER_PAGES_ROUTES),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./views/admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
  },

]
