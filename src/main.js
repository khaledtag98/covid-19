import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
import "normalize.css";
import "./js/js.js"

Vue.config.productionTip = false;
new Vue({
    store,
    render: h => h(App)
}).$mount("#app");