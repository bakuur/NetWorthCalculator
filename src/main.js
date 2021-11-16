import Vue from 'vue'
import App from './App.vue'
import DummyView from '@/components/admin/staterpage/DummyView.vue'
import StaterPageComponent from '@/components/admin/staterpage/StaterPageComponent.vue'
import DefaultLayout from '@/components/admin/layouts/layout/DefaultLayout.vue'
import AuthenticationLayout from '@/components/admin/layouts/layout/AuthenticationLayout.vue'

Vue.component('default-layout',DefaultLayout)
Vue.component('authentication-layout',AuthenticationLayout)

//VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//BootstrapVue
import { BootstrapVue} from 'bootstrap-vue'
Vue.use(BootstrapVue)

//VueApexCharts 
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

const routes= [
  {
    path: '/',
    redirect: '/starter-page',
  },
  {
    path: '/starter-page',
    name: 'staterpage',
    component: StaterPageComponent,
    meta: {isFooter:true },
  },
  {
    path: '/authentication',
    redirect: '/auth-*',
    component: DummyView,
    children: [
      { path: 'auth-login',name: 'login', meta: { layout:'authentication'},component:()=>import('@/components/admin/authentication/Sign_inComponent.vue')},
      { path: 'auth-signup',name: 'register', meta: { layout:'authentication'},component:()=>import('@/components/admin/authentication/Sign_upComponent.vue')},
      { path: 'auth-password-reset',name: 'fpassword', meta: { layout:'authentication'},component:()=>import('@/components/admin/authentication/ResetPasswordComponent.vue')},
      { path: 'auth-two-step',name: 'verification', meta: { layout:'authentication'},component:()=>import('@/components/admin/authentication/TwostepVerificationComponent.vue')},
      { path: 'auth-404',name: '404', meta: { layout:'authentication'},component:()=>import('@/components/admin/authentication/PageNotFoundComponent.vue')},
    ]
  },
  {
      path: '*',
      redirect: '/starter-page'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/admin'
})
router.afterEach(() => {
  Vue.nextTick( () => {
      document.title = 'ShakePay - Net Worth';
  });
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
