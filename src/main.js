import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import VueAppInsights from 'vue-application-insights'
 import store from './store/index'
Vue.use(VueAppInsights, {
  id: 'ae75c8e9-8e61-4966-a931-b93e6782388f',
  router
})

import Notifications from 'vue-notification'
import axios from 'axios'

Vue.use(Notifications)
Vue.config.productionTip = false
Vue.use(Vuex);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
