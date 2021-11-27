import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';

const options = {
  position: 'absolute',
  color: '#5e92f3',
  failedColor: 'red',
  thickness: '4px',
};

Vue.use(VueProgressBar, options);
