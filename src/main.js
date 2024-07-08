import "./assets/main.css";

import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "unhead";
import "vue-image-zoomer/dist/style.css";
import VueImageZoomer from "vue-image-zoomer";

// eslint-disable-next-line no-unused-vars
const head = createHead();
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueImageZoomer)
  .mount("#app");
