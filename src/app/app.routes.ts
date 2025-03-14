import { Routes } from '@angular/router'
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component'
import { HelpLayoutComponent } from './layouts/help-layout/help-layout.component'
import { AgentLayoutComponent } from './layouts/agent-layout/agent-layout.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { AuthGuard } from './core/guards'
import { ChatComponent } from './views/chat/chat.component'
import { PolicyComponent } from './views/policy/policy.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/home/home.route').then((mod) => mod.HOME_ROUTES),
  },
  {
    path: 'office',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/office/office.route').then((mod) => mod.OFFICE_ROUTES),
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
    path: 'europe',
    loadChildren: () =>
      import('./views/europe/europe.route').then((mod) => mod.EUROPE_ROUTES),
  },
  {
    path: 'business',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/office/office.route').then((mod) => mod.OFFICE_ROUTES),
  },
  {
    path: 'faq',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/faq/faq.route').then((mod) => mod.FAQ_ROUTES),
  },
  {
    path: 'contact',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/contact/contact.route').then((mod) => mod.CONTACT_ROUTES),
  },
  {
    path: 'advisors',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/advisors/advisors.route').then(
        (mod) => mod.ADVISORS_ROUTES
      ),
  },
  {
    path: 'destiny',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/destiny/destiny.route').then((mod) => mod.DESTINY_ROUTES),
  },
  {
    path: 'chat',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/chat/chat.route').then((mod) => mod.CHAT_ROUTES),
  },
  {
    path: 'leads',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/leads/leads.route').then((mod) => mod.LEADS_ROUTES),
  },
  {
    path: 'policy',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/policy/policy.route').then((mod) => mod.POLICY_ROUTES),
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
  {
    path: 'info',
    loadChildren: () =>
      import('./views/info/info.routes').then((mod) => mod.INFO_ROUTES),
  },
  {
    path: 'blog',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/blog/blog.routes').then((mod) => mod.BLOG_ROUTES),
  },
  {
    path: 'stripe',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/stripe-pay-form/stripe-pay-form.route').then(
        (mod) => mod.STRIPE_ROUTES
      ),
  }
]
