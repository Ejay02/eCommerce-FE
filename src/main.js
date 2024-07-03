import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { createHead } from "unhead";
import VueImageZoomer from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";

// eslint-disable-next-line no-unused-vars
const head = createHead();

createApp(App).use(router).use(VueImageZoomer).mount("#app");
