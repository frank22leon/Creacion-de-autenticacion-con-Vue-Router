import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Store from "../store";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "*", redirect: "/login" },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      login: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: {
      login: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      login: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.login) {
      if (Store.state.currentUser) {
        next();
      } else {
        next("/login");
      }
    } else {
      next();
    }
});

export default router;
