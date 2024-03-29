// FILE: main.js

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Loading, Notify } from "quasar";

import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/mdi-v6/mdi-v6.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/line-awesome/line-awesome.css";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";

// A few examples for animations from Animate.css:
import "@quasar/extras/animate/fadeIn.css";
import "@quasar/extras/animate/fadeOut.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue";

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(Quasar, {
	plugins: {
		Loading,
		Notify
	} // import Quasar plugins and add here
});

myApp.use(pinia);
myApp.use(router);
myApp.use(VueAxios, axios);
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
