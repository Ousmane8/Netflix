import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, LayoutPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronRight,faEnvelope, faPlay, faInfoCircle, faBars, faListUl, faCheck, faTrash} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faSnapchatGhost, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faChevronRight, faFacebookF, faInstagram, faTwitter, faSnapchatGhost,faYoutube,faEnvelope, faPlay,faInfoCircle,faBars, faListUl, faCheck,faTrash )
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Install BootstrapVue
Vue.use(BootstrapVue)

// Install VueCarousel
Vue.use(VueCarousel)

// Install VueToast
Vue.use(VueToast);


import store from "@/mixins/store";

// Optionally install the BootstrapVue icon components plugin
Vue.use(LayoutPlugin)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
