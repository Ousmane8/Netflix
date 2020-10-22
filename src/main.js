import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, LayoutPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronRight,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faSnapchatGhost, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faFacebookF, faInstagram, faTwitter, faSnapchatGhost,faYoutube,faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(LayoutPlugin)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
