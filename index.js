// nuxt-helper/index.js

// Main entry point for the Nuxt.js application

import Vue from 'vue';
import Nuxt from 'nuxt';

const app = new Vue({
  render: h => h(Nuxt)
});

app.$mount('#app');
