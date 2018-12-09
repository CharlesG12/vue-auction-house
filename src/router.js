import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Sale from "./views/Sale.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sale",
      name: "sale",
      component: Sale
    },
    {
      path: "/user",
      name: "user",
      component: () =>
        import("@/views/User.vue")
    },
    {
      path: "/listSale",
      name: "listSale",
      component: () =>
        import("@/views/ListSells.vue")
    },
    {
      path: "/bidding/:id",
      name: "itemcard",
      component: () =>
        import("@/components/ItemCard.vue")
    }
  ]
});
