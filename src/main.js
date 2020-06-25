import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store/index";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "./js/js.js";
import "./icons.js";
Vue.config.productionTip = false;
new Vue({
    store,
    render: h => h(App)
}).$mount("#app");