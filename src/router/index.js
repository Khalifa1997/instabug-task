import store from "@/store";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import WelcomeView from "../views/WelcomeView.vue";
const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: WelcomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  let isAuth = false;
  const str = JSON.parse(JSON.stringify(store.state));
  if (str && str.length > 0) {
    isAuth = str[0].authenticated;
  }
  const routes = ["welcome", "login"];
  if (routes.includes(to.name)) {
    if (to.name == "Welcome" && !isAuth) return next({ path: "/login" });
    if (to.name == "Login" && isAuth) return;
  } else {
    return next({ path: "/login" });
  }
  return next();
});
export default router;
