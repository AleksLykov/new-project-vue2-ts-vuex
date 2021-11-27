import Vue from 'vue';
import Moment from 'moment';
import dateFormats from '@models/objects/dateFormats';

const lang = 'ru';
Moment.locale(lang);

Object.defineProperties(Vue.prototype, {
  $moment: {
    get() {
      return Moment;
    },
  },
  $dateFormats: {
    get() {
      return dateFormats;
    },
  },
});
