// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FlagIcon from 'vue-flag-icon'
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'
import VmBackTop from 'vue-multiple-back-top'

Vue.component(VmBackTop.name, VmBackTop)

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.use(FlagIcon)

Vue.config.productionTip = false
require('../node_modules/bootstrap/less/bootstrap.less')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
