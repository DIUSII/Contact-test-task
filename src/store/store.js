import Vue from 'vue'
import Vuex from 'vuex'
import signin from './modules/signin'
import windowAdd from './modules/windowAddItem'
import validationWindowAddItem from './modules/validationAddWindow'

Vue.use(Vuex)

export default new Vuex.Store({
    mutations: {
        PUSH_IN_ITEMS(state, item){
            state.items.push(item);
            localStorage.items = JSON.stringify(state.items);
            console.log(state.items)
        },
        DELETE_IN_ITEMS(state, index){
            state.items.splice(index, 1);
            localStorage.items = JSON.stringify(state.items);
        },
        SHOW_MODAL_WINDOW_DELETE(state, index){
            state.items[index].deleteModal = true;
            localStorage.items = JSON.stringify(state.items);
        },
        CLOSE_MODAL_WINDOW_DELETE(state, index){
            state.items[index].deleteModal = false;
            localStorage.items = JSON.stringify(state.items);
        },
        EDIT_INPUT_NAME(state, index){
            state.items[index].editBoolionName = false;
            localStorage.items = JSON.stringify(state.items);
        },
        CANSEL_INPUT_EDIT_NAME(state, obj){
            state.items[obj.index].name = obj.inputName;
            state.items[obj.index].editBoolionName = true;
            localStorage.items = JSON.stringify(state.items);
        },
        EDIT_INPUT_PHONE(state, index){
            state.items[index].editBoolionPhone = false;
            localStorage.items = JSON.stringify(state.items);
        },
        CANSEL_INPUT_EDIT_PHONE(state, obj){
            state.items[obj.index].phone = obj.inputPhone;
            state.items[obj.index].editBoolionPhone = true;
            localStorage.items = JSON.stringify(state.items);
        },
    },
    state: {
        items: [],
    },
    getters: {
        conclusionItems(state){
            state.items = JSON.parse(localStorage.items);
            return state.items
        }
    },
    modules: {
        signin,
        windowAdd,
        validationWindowAddItem
    }
})