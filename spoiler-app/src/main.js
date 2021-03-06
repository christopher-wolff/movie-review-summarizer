import Vue from 'vue'
import App from './App.vue'
import VueFire from 'VueFire'
import d3 from 'd3'

import * as firebase from 'firebase'


import 'expose-loader?$!expose-loader?jQuery!jquery'

Vue.use(VueFire)

new Vue({
  el: '#app',
  render: h => h(App)
})
