import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cars",
    name: "Cars",
    // @ts-ignore
    component: () => import(/* webpackChunkName: "cars" */ "../views/Cars.vue"),
  },
  {
    path: "/houses",
    name: "Houses",
    component: () =>
      // @ts-ignore
      import(/* webpackChunkName: "houses" */ "../views/Houses.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    // @ts-ignore
    component: () => import(/* webpackChunkName: "jobs" */ "../views/Jobs.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
