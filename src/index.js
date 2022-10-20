import { createApp } from "sreact";

import App from "./app";
import router from "./router"

const app = createApp({router, App });
app.mount("#app");