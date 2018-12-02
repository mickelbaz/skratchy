import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from './components/Homepage.vue'
import Illustration from './components/arts/Illustration.vue'
import ElectricAnimals from './components/arts/illustrations/ElectricAnimals.vue'
import LaBoom from './components/arts/illustrations/LaBoom.vue'
import Graphism from './components/arts/Graphism.vue'
import Photography from './components/arts/Photography.vue'

Vue.config.productionTip = false

const routes = [{
    path: '/',
    component: Homepage
  },
  {
    path: '/illustration',
    component: Illustration,
  },
  {
    path: '/illustration/electric-animals',
    component: ElectricAnimals

  },
  {
    path: '/illustration/la-boom',
    component: LaBoom
  },
  {
    path: '/graphism',
    component: Graphism
  },
  {
    path: '/photography',
    component: Photography
  }
]
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')