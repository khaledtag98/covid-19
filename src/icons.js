import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// fas to import all icons (not recommended)
import { faSearch, faInfo, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faLinkedin, faSearch, faInfo, faArrowUp);
Vue.component("fa-icon", FontAwesomeIcon);