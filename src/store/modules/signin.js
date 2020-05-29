import axios from 'axios'
import router from '../../router/router'
export default {
    state: {
        user: {
            login: null,
            password: null,
        },
        errorNull: false,
        errorWarning: false,
    },
    actions: {
        async GET_USER(ctx){
            await axios
                .get('http://localhost:3000/user/1')
                .then(res => {
                        ctx.commit('GET_ACTIONS', res.data);
                    });
        }
    },
    mutations: {
        GET_LOGIN_AND_PASSWORD(state, inputValue){
            if(state.user.login == inputValue.login && state.user.password == inputValue.password){
                router.push({path: './contact'});
                localStorage.signin = 'signin';
                localStorage.items = '[]';
                localStorage.id = '0';
            } else if(inputValue.login == "" || inputValue.password == ""){
                state.errorNull = true;
                state.errorWarning = false;
            } else {
                state.errorWarning = true;
                state.errorNull = false;
            }
        },
        GET_ACTIONS(state, user){
            state.user = user;
        },
    },
    getters: {
        conclusionErrorNull(state){
            return state.errorNull;
        },
        conclusionErrorWarning(state){
            return state.errorWarning;
        }
    }
}