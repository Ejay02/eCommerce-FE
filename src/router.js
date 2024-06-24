import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import Contact from "./pages/contact.vue";
import Layout from "./components/layout.vue";
import Store from "./pages/store.vue";
import NotFound from "./components/error/notFound.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
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
      {
        path: "store",
        component: Store,
      },
    ],
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
