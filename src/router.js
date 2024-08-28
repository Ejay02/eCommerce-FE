import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/home.vue";
import Cart from "./pages/cart.vue";
import About from "./pages/about.vue";
import Store from "./pages/store.vue";
import Contact from "./pages/contact.vue";
import FAQ from "./pages/faq.vue";
import Login from "./pages/auth/login.vue";
import Blogs from "./pages/blog/blogs.vue";
import Wishlist from "./pages/wishlist.vue";
import SignUp from "./pages/auth/signup.vue";
import Layout from "./components/layout.vue";
import SizeChart from "./pages/sizeChart.vue";
import BlogView from "./pages/blog/blogView.vue";
import Product from "./pages/products/product.vue";
import NotFound from "./components/error/notFound.vue";
import ResetPassword from "./pages/auth/resetPassword.vue";
import Compare from "./pages/products/compareProducts.vue";
import ForgotPassword from "./pages/auth/forgotPassword.vue";
import RefundPolicy from "./pages/policies/refundPolicy.vue";
import PrivacyPolicy from "./pages/policies/privacyPolicy.vue";
import ShippingPolicy from "./pages/policies/shippingPolicy.vue";
import TermsOfService from "./pages/policies/termsOfService.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/account/signup",
    component: SignUp,
  },
  {
    path: "/account/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/account/reset-password",
    component: ResetPassword,
  },
  {
    path: "/layout",
    component: Layout,
    meta: { requiresAuth: true },
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
        path: "faqs",
        component: FAQ,
      },
      {
        path: "size-chart",
        component: SizeChart,
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
      { path: "/layout/blog/:id", component: BlogView },
      {
        path: "compare",
        component: Compare,
      },
      {
        path: "wishlist",
        component: Wishlist,
      },
      {
        path: "cart",
        component: Cart,
      },
      {
        path: "privacy-policy",
        component: PrivacyPolicy,
      },
      {
        path: "refund-policy",
        component: RefundPolicy,
      },
      {
        path: "shipping-policy",
        component: ShippingPolicy,
      },
      {
        path: "terms-of-service",
        component: TermsOfService,
      },
      {
        path: "/layout/product/:id",
        component: Product,
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
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

// Navigation guard to check for authentication
// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth && !isLoggedIn()) {
    // If not logged in, redirect to login page
    return { path: "/" };
  }
});

// check if user is logged in
function isLoggedIn() {
  return localStorage.getItem("token") !== null;
}

export default router;
