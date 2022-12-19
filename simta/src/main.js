import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store, MyStore } from './store'
import vuetify from './plugins/vuetify'
import { getModule } from 'vuex-module-decorators'
import axios from 'axios'
import auth from "@/models/auth"

var EventBus = new Vue()

Vue.prototype.$http = axios;
Vue.prototype.$EventBus = EventBus;
Vue.prototype.store = store;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

auth.login()
