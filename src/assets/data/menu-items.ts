import type { MenuItemType } from 'src/app/core/models'

export const bookingHomeMenuItems: MenuItemType[] = [
  {
    key: 'hotel-home',
    label: 'Hotel',
    url: '/hotels/home',
    icon: 'fa-solid fa-hotel',
  },
  {
    key: 'flight-home',
    label: 'Flight',
    url: '/flights/home',
    icon: 'fa-solid fa-plane',
  },
  {
    key: 'tour-home',
    label: 'Tour',
    url: '/tours/home',
    icon: 'fa-solid fa-earth-americas',
  },
  {
    key: 'cabs-home',
    label: 'Cab',
    url: '/cabs/home',
    icon: 'fa-solid fa-car',
  },
]

export const USER_PROFILE_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'acc-user-profile',
    label: 'Mi Perfil',
    url: '/user/profile',
    parentKey: 'acc-user',
    icon: 'bi bi-person',
  },
  // {
  //   key: 'acc-user-payment-details',
  //   label: 'Analiticas',
  //   url: '/user/payment-details',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-bar-chart',
  // },
  // {
  //   key: 'acc-user-wishlist',
  //   label: 'Mis Citas',
  //   url: '/user/wishlist',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-heart',
  // },
  {
    key: 'acc-user-finances',
    label: 'Ordenes',
    url: '/user/finances',
    parentKey: 'acc-user',
    icon: 'bi bi-cash-coin',
  },
  // {
  //   key: 'acc-user-dates',
  //   label: 'Citas',
  //   url: '/user/dates',
  //   parentKey: 'acc-dates',
  //   icon: 'bi bi-calendar-week',
  // },
  {
    key: 'acc-user-bookings',
    label: 'Vuelos',
    url: '/user/bookings',
    parentKey: 'acc-user',
    icon: 'bi bi-ticket-perforated',
  },
  {
    key: 'acc-user-hotel-bookings',
    label: 'Hospedajes',
    url: '/user/hotel-bookings',
    parentKey: 'acc-hotel-bookings',
    icon: 'bi bi-house-door',
  },
  {
    key: 'acc-user-insurances',
    label: 'Seguros',
    url: '/user/insurances',
    parentKey: 'acc-user',
    icon: 'bi bi-postcard-heart',
  },
  // {
  //   key: 'acc-user-special-services',
  //   label: 'Servicios Especiales',
  //   url: '/user/special-services',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-gear',
  // },
  // {
  //   key: 'acc-user-car-reantals',
  //   label: 'Alquiler de Autos',
  //   url: '/user/rental-cars',
  //   parentKey: 'acc-user-car-rentals',
  //   icon: 'bi bi-car-front',
  // },
  // {
  //   key: 'acc-user-sim-cards',
  //   label: 'E-Sim',
  //   url: '/user/esim',
  //   parentKey: 'acc-user-car-',
  //   icon: 'bi bi-sim',
  // },
  // {
  //   key: 'acc-user-settings',
  //   label: 'Settings',
  //   url: '/user/settings',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-gear',
  // },
]

export const AGENT_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'acc--dashboard',
    label: 'Dashboard',
    url: '/agent/dashboard',
    parentKey: 'acc-agent',
    icon: 'bi bi-house-door',
  },
  {
    key: 'acc-agent-listings',
    label: 'Listings',
    url: '/agent/listings',
    parentKey: 'acc-agent',
    icon: 'bi bi-journals',
  },
  {
    key: 'acc-agent-bookings',
    label: 'Bookings',
    url: '/agent/bookings',
    parentKey: 'acc-agent',
    icon: 'bi bi-bookmark-heart',
  },
  {
    key: 'acc-agent-activities',
    label: 'Activities',
    url: '/agent/activities',
    parentKey: 'acc-agent',
    icon: 'bi bi-bell',
  },
  {
    key: 'acc-agent-earnings',
    label: 'Earnings',
    url: '/agent/earnings',
    parentKey: 'acc-agent',
    icon: 'bi bi-graph-up-arrow',
  },
  {
    key: 'acc-agent-reviews',
    label: 'Reviews',
    url: '/agent/reviews',
    parentKey: 'acc-agent',
    icon: 'bi bi-star',
  },
  {
    key: 'acc-agent-settings',
    label: 'Settings',
    url: '/agent/settings',
    parentKey: 'acc-agent',
    icon: 'bi bi-gear',
  },
]

export const ADMIN_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    key: 'pages-title',
    label: 'Pages',
    isSection: true,
  },
  {
    key: 'bookings',
    label: 'Bookings',
    children: [
      {
        key: 'bookings-list',
        label: 'Booking List',
        url: '/admin/bookings/list',
        parentKey: 'bookings',
      },
      {
        key: 'bookings-detail',
        label: 'Booking Detail',
        url: '/admin/bookings/detail',
        parentKey: 'bookings',
      },
    ],
  },
  {
    key: 'guests',
    label: 'Guests',
    children: [
      {
        key: 'guests-list',
        label: 'Guest List',
        url: '/admin/guests/list',
        parentKey: 'guests',
      },
      {
        key: 'guests-detail',
        label: 'Guest Detail',
        url: '/admin/guests/detail',
        parentKey: 'guests',
      },
    ],
  },
  {
    key: 'agents',
    label: 'Agents',
    children: [
      {
        key: 'agents-list',
        label: 'Agent List',
        url: '/admin/agents/list',
        parentKey: 'agents',
      },
      {
        key: 'agents-detail',
        label: 'Agent Detail',
        url: '/admin/agents/detail',
        parentKey: 'agents',
      },
    ],
  },
  {
    key: 'reviews',
    label: 'Reviews',
    url: '/admin/reviews',
  },
  {
    key: 'earnings',
    label: 'Earnings',
    url: '/admin/earnings',
  },
  {
    key: 'admin-settings',
    label: 'Admin Settings',
    url: '/admin/settings',
  },
  {
    key: 'admin-auth',
    label: 'Authentication',
    children: [
      {
        key: 'auth-sign-up',
        label: 'Sign Up',
        url: '/auth/sign-up',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-sign-in',
        label: 'Sign in',
        url: '/auth/sign-in',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forgot Password',
        url: '/auth/forgot-password',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-two-factor-authentication',
        label: 'Two Factor Authentication',
        url: '/auth/two-factor-auth',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-not-found',
        label: 'Error 404',
        url: '/not-found',
        target: '_blank',
        parentKey: 'admin-auth',
      },
    ],
  },
]

export const HELP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'help-center',
    label: 'Help Center',
    isTitle: true,
    children: [
      {
        key: 'helps-center-page',
        label: 'Help Center',
        url: '/help/center',
        parentKey: 'help-center',
      },
      {
        key: 'helps-detail-page',
        label: 'Help Detail',
        url: '/help/detail',
        parentKey: 'help-center',
      },
    ],
  },
  {
    key: 'helps-privacy-policy',
    label: 'Privacy Policy',
    url: '/help/privacy-policy',
    isTitle: true,
  },
  {
    key: 'helps-service',
    label: 'Terms of Service',
    url: '/help/service',
    isTitle: true,
  },
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'inicio',
    label: 'Inicio',
    url: '/',
    icon: 'fa-solid fa-home',
  },
  {
    key: 'promociones',
    label: 'Promociones',
    url: '/promotions',
    icon: 'fa-solid fa-gift',
  },
  {
    key: 'empresa',
    label: 'Empresa',
    url: '/business/global',
    icon: 'fa-solid fa-building',
    children: [
      {
        key: 'business',
        label: 'Empresa',
        url: '/business',
      },
      {
        key: 'asesores',
        label: 'Asesores',
        url: '/advisors',
      },
    ],
  },
  {
    key: 'destino',
    label: 'Destino',
    url: '/destiny',
    icon: 'fa-solid fa-map-marker',
  },
  {
    key: 'faq',
    label: 'FAQ',
    url: '/faq',
    icon: 'fa-solid fa-question-circle',
  },
  // {
  //   key: 'blog',
  //   label: 'Blog',
  //   url: '/blog',
  //   icon: 'fa-solid fa-map-marker',
  // },
  {
    key: 'contacto',
    label: 'Contacto',
    url: '/contact',
    icon: 'fa-solid fa-envelope',
  },
  {
    key: 'Iniciar Sesion',
    label: 'Iniciar Sesion',
    url: '/auth/sign-in',
    icon: 'fa-solid fa-envelope',
  },
]
