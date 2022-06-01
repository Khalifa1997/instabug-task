import store from "@/store";
import {
  createRouter,
  createWebHashHistory,
  //createWebHistory,
} from "vue-router";
import LoginView from "../views/LoginView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

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
  {
    path: "/",
    redirect: "/welcome",
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundView,
  },
  {
    path: "/:pathMatch(.*)*",

    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const str = await JSON.parse(JSON.stringify(store.state));

  const routes = ["welcome", "login", "404"];
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
