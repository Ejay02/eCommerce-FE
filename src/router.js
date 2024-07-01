import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/home.vue";
import Blogs from "./pages/blog/blogs.vue";
import About from "./pages/about.vue";
import Store from "./pages/store.vue";
import Contact from "./pages/contact.vue";
import Login from "./pages/auth/login.vue";
import Wishlist from "./pages/wishlist.vue";
import SignUp from "./pages/auth/signup.vue";
import Layout from "./components/layout.vue";
import BlogView from "./pages/blog/blogView.vue";
import Compare from "./pages/compareProducts.vue";
import NotFound from "./components/error/notFound.vue";
import ForgotPassword from "./pages/auth/forgotPassword.vue";
import ResetPassword from "./pages/auth/resetPassword.vue";

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
      {
        path: "blogs",
        component: Blogs,
      },
      { path: "blog/:id", component: BlogView },
      {
        path: "compare",
        component: Compare,
      },
      {
        path: "wishlist",
        component: Wishlist,
      },
      {
        path: "account/login",
        component: Login,
      },
      {
        path: "account/signup",
        component: SignUp,
      },
      {
        path: "account/forgot-password",
        component: ForgotPassword,
      },
      {
        path: "account/reset-password",
        component: ResetPassword,
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
