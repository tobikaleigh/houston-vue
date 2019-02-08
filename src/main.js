import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/sass/main.scss';

Vue.prototype.$API_LOCATION = 'http://houston.local/api/';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');