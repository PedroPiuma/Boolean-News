import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SpaceView from "../views/SpaceView.vue"
import HolidaysView from "../views/HolidaysView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/space",
      name: "space",
      component: SpaceView,
    },
    {
      path: "/feriados",
      name: "feriados",
      component: HolidaysView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
})

export default router
