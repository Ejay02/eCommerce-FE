import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { createHead } from "unhead";

// eslint-disable-next-line no-unused-vars
const head = createHead();

createApp(App).use(router).mount("#app");
