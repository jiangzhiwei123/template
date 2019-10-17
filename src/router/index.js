/* eslint-disable import/no-dynamic-require */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/loading"
    },
    {
      path: "/index",
      name: "index",
      component: resolve => require(["../views/Index.vue"], resolve)
    },
    {
      path: "/loading",
      name: "loading",
      component: resolve => require(["../views/Loading.vue"], resolve)
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
