import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
import VueRouter from 'vue-router'
import DezenixVue from '@/entry.esm';

Vue.use(DezenixVue);
Vue.use(VueRouter)

Vue.config.productionTip = false;

const Sample = { template: '<DezenixVueSample/>' }

const routes = [
  { path: '/sample', component: Sample },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h): VNode => h(Dev),
}).$mount('#app');
