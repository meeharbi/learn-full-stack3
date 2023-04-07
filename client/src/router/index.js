import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("@/Components/HelloWorld.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/Components/Register.vue")
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
