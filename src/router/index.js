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
  {
    path: "/",
    redirect: "/welcome",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const str = await JSON.parse(JSON.stringify(store.state));

  const routes = ["welcome", "login"];
  if (routes.includes(to.name)) {
    if (to.name == "welcome" && !str.authenticated)
      return next({ path: "/login" });
  } else {
    if (!str.authenticated) return next({ path: "/login" });

    return next({ path: "/welcome" });
  }
  return next();
});
export default router;
