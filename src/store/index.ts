import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@models/store';
import { auth } from './auth';
import { main } from './main';

Vue.use(Vuex);
Vue.config.devtools = process.env.NODE_ENV === 'development';

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
    settings: null,
  },
  modules: {
    auth,
    main,
  },
};

export default new Vuex.Store<RootState>(store);
