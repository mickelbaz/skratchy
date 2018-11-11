import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from './components/Homepage.vue'
import Illustration from './components/Illustration.vue'
import Graphism from './components/Graphism.vue'
import Photography from './components/Photography.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Homepage },
  { path: '/illustration', component: Illustration },
  { path: '/graphism', component: Graphism },
  { path: '/photography', component: Photography }
]
const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
