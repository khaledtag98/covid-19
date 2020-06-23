import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isReady: false,
        isEgy: true,
    },
    mutations: {
        toggleyisEgy(state) {
            state.isEgy = !state.isEgy
        }
    },
    actions: {},
    modules: {}
});