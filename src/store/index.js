import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isReady: false,
        isEgy: true,
        searchAcitve: false,
        infoAcitve: false
    },
    mutations: {
        // toggleyisEgy(state) {
        //     state.isEgy = !state.isEgy
        // }
        checkSearch(state) {
            state.searchAcitve = true;
            state.infoAcitve = false;
        },
        checkInfo(state) {
            state.searchAcitve = false;
            state.infoAcitve = true;
        }
    },
    actions: {},
    modules: {}
});