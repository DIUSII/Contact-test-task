export default {
    state: {
        user: {
            name: "",
            phone: "",
        },
        id: 0,
        item: {
            id: null,
            name: null,
            phone: null,
            deleteModal: null,
            editBoolionName: null,
            editBoolionPhone: null,
        },
        error: false,
    },
    getters: {
        conclusionError(state){
            return state.error;
        },
        conclusionItem(state){
            return state.item;
        }
    },
    mutations: {
        VALIDATION_INPUT(state, user){
            console.log(user);
            state.user = user;
            console.log(state.user);
            if(state.user.name === "" || state.user.phone === "" || state.user.phone.length != 17){
                state.error = true;
            } else {
                state.id = JSON.parse(localStorage.id);
                state.error = false;
                state.item = {
                    id: state.id++,
                    name: state.user.name,
                    phone: state.user.phone,
                    deleteModal: false,
                    editBoolionName: true,
                    editBoolionPhone: true,
                }
                localStorage.id = JSON.stringify(state.id);
            }
        },
        
    },
}