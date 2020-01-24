import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
      path: "/year/:year",
      name: "year",
      props: true,
      component: () => import(/* webpackChunkName: "year" */ "./views/Year.vue")
    }
  ]
});
