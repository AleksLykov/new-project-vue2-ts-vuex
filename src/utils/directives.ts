/* eslint-disable no-param-reassign */
import Vue from 'vue';
import { debounce } from '@utils/functions';

/**
 * Директива для динамической подгрузки при скролле до конца страницы
 * @example
 * <Component v-dynamic-load="callbackFunc"/>
 */
Vue.directive('dynamic-load', {
  bind: (el, binding) => {
    const cb = debounce(binding.value, 100);
    el.addEventListener('scroll', () => {
      if (Math.round(el.scrollTop + el.offsetHeight) + 1 >= el.scrollHeight) {
        cb();
      }
    });
  },
});
