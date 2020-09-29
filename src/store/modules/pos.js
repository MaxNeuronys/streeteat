const Pos = {
    namespaced: true,
    strict: true,
    state:{
        CurrentPos:{
            lat: null,
            lng: null
            }
    },
    mutations:{
        SETCURRENTPOS(state, pos){
            state.CurrentPos = pos
        }
    },
    actions:{

    }
}
export default Pos;