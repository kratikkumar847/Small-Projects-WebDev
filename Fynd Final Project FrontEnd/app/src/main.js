import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import store from './store'
import router from './router';
import VueRouter from 'vue-router'


Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
