import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index";
import Start from "@/views/start";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index },
  { path: "/start", component: Start },
];

const router = new VueRouter({
  model: "history",
  routes,
});

export default router;
