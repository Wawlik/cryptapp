// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-solarized//bootstrap-solarized-dark.css'

global.$ = require('jquery')

Vue.config.productionTip = false

var VueMain = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

export default VueMain
