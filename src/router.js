import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import Contact from "./pages/contact.vue";
import Layout from "./components/layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "about",
        component: About,
      },
      {
        path: "contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
