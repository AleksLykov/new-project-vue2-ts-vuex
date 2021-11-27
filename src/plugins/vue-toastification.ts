import Vue from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options = {
  position: 'top-center',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  transition: 'Vue-Toastification__bounce',
  maxToasts: 10,
  newestOnTop: true,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
};

Vue.use(Toast, options);
