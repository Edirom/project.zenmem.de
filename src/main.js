import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/index.js'

import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
Vue.use(FlagIcon);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAward, faTabletAlt,
  faGraduationCap, faProjectDiagram,
  faUsers, faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAward, faTabletAlt, faGraduationCap,
    faProjectDiagram, faUsers, far, faCheckCircle, faExternalLinkAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
