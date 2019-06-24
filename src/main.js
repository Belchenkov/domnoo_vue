import Vue from 'vue'
import VueResource from 'vue-resource';

import App from './App.vue'

import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueResource);
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);

Vue.http.options.root = 'https://domnoo-8a782.firebaseio.com/';

new Vue({
  el: '#app',
  render: h => h(App),
});
