export default  {
    mutations: {
        openWindow(state){
            state.window = true;
        },
        closeWindow(state){
            state.window = false;
        }
    },
    state: {
        window: false,
    },
    getters: {
        conclusionWindow(state){
            return state.window;
        }
    }
}