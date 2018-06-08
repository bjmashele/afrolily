import Vue from 'vue'
import App from './App.vue'

//env config
if (process.env.NODE_ENV === 'production') {
  window.endpoint = "https:/afrolily.heroku.com";
} else {
  window.endpoint = "http://localhost:3000";
}

//Global vars
window.moment = require('moment');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//Local dependensies
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Product from './components/Product.vue'
import Order from './components/Order.vue'
import Complete from './components/Complete.vue'

// Routes
const routes = [
  { name: 'home', path: '/', component: Product },
  { name: 'order', path: '/order', component: Order },
  { name: 'order-complete', path: '/order-complete/:id', component: Complete }
];

//Register Routes
const router = new VueRouter({
  routes
});

// Instantiate application to the DOM
new Vue({
  router,
  el: '#app',
  data(){
      return {
          order_details: {}
      }
  },
  render: h => h(App)
});
