import "./assets/main.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import { createHead } from "unhead";
import VueImageZoomer from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";



// eslint-disable-next-line no-unused-vars
const head = createHead();
const pinia = createPinia();

createApp(App).use(pinia).use(router).use(VueImageZoomer).mount("#app");
