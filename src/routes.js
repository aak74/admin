import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import ServicesView from './components/views/Services.vue'
import ServiceView from './components/views/Service.vue'
import SettingsView from './components/views/Settings.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Обзор'}
      }, {
        path: 'settings',
        component: SettingsView,
        name: 'Настройки',
        meta: {description: 'Основные настройки сайта'}
      }, {
        path: 'services/:id',
        component: ServiceView,
        name: 'Услуга',
        meta: {description: 'Редактирование услуги'}
      }, {
        path: 'services',
        component: ServicesView,
        name: 'Услуги',
        meta: {description: 'Услуги салона'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
