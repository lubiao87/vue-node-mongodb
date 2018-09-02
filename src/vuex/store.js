import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count:"游客"
}
const mutations ={
    seta(){
        state.count = "尊敬的用户"
    }
}
export default new Vuex.Store({
    state,
    mutations

})