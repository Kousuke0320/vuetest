// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

var config = {
  apiKey: "AIzaSyDO78gpdB_aYBAmQ_fyx5EgaHqIfII0oKc",
  authDomain: "skillweb-dddfe.firebaseapp.com",
  databaseURL: "https://skillweb-dddfe.firebaseio.com",
  projectId: "skillweb-dddfe",
  storageBucket: "skillweb-dddfe.appspot.com",
  messagingSenderId: "290398200950"
};

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
