import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCarousel from 'vue-carousel';
import BiddingCard from "./components/BiddingCard.vue"
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
import AtUI from "at-ui"
import axios from "axios"
import VModal from 'vue-js-modal'
 
Vue.use(VModal)
Vue.use(VueCarousel);
Vue.use(VCalendar);
Vue.use(AtUI);
Vue.use(axios);

Vue.component('bidding-card', BiddingCard)

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
