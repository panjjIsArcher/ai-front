import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index"
Vue.use(VueRouter);

const routes = [{ path: "/", component: Index }];

const router = new VueRouter({
  model: "history",
  routes,
});

export default router;
