import Vue from 'vue'
import RootPatch from '@/components/RootPath.vue'
import router from '../router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  render: h => h(RootPatch),
}).$mount('#app')
