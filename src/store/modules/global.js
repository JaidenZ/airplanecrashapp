
import * as types from '../type'

const state = {
    serverConnect:false
}

const actions = {
    setConnect({commit},connect){
        commit(types.GLOBAL_SERVERSTATE,connect)
    }
}

const getters = {
    serverConnect: (state)=>{
        return state.serverConnect
    }

}

const mutations = {
    [types.GLOBAL_SERVERSTATE](state,res){
        state.serverConnect = res.serverConnect
    }
}

export default{
    state,
    actions,
    getters,
    mutations
}