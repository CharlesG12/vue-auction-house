import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Sale from "./views/Sale.vue";
import NotFound  from "./views/NotFound.vue";
import store from "@/store"

Vue.use(Router);

const router = new Router({
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
      component: Sale,
      beforeEnter(to, from, next) {
        if (store.getters.getToken) next()
        else next('/login')
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue"),
      beforeEnter(to, from, next) {
        if (store.getters.getToken) next()
        else next('/login')
      }
    },
    {
      path: "/listSale",
      name: "listSale",
      component: () =>
        import("@/views/ListSells.vue"),
      beforeEnter(to, from, next) {
        if (store.getters.getToken) next()
        else next('/login')
      }
    },
    {
      path: "/bidding/:id",
      name: "itemcard",
      component: () =>
        import("@/components/ItemCard.vue"),
      beforeEnter(to, from, next) {
        if (store.getters.getToken) next()
        else next('/login')
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/Admin.vue")
    },
    {
      path: "/itemtable",
      name: "itemtable",
      component: () => 
        import("@/views/ItemTable.vue"),
      beforeEnter(to, from, next) {
        if (store.getters.getToken) next()
        else next('/login')
      }
    },
    {
      path: "/editprofile",
      name: "editprofile",
      component: () => 
        import("@/components/EditProfile.vue"),
      beforeEnter(to, from, next) {
        if (store.getters.getToken) next()
        else next('/login')
      }
    },
    { path: '/404', component: NotFound },  
    { path: '*', redirect: '/404' },  
  ]
});

export default router
