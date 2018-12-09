import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCarousel from 'vue-carousel';
import BiddingCard from "./components/BiddingCard.vue"
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
import AtUI from "at-ui"

Vue.use(VueCarousel);
Vue.use(VCalendar);
Vue.use(AtUI);

Vue.component('bidding-card', BiddingCard)

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
