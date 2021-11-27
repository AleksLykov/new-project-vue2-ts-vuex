import Vue from 'vue';
import '@plugins/element';
import '@plugins/moment';
import '@plugins/vue-toastification';
import '@plugins/vue-progressbar';
import '@plugins/vue-smooth-scroll';
import '@plugins/vue-sanitize';
import vuetify from '@plugins/vuetify';
import '@utils/directives';

import App from './pages/App.vue';
import store from './store';
import router from './router/index';

Vue.config.productionTip = false;

(async () => {
  const app = new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  });
  app.$mount('#app');
})();
