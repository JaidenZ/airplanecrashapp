
import * as types from '../type'

const state = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    
}


const actions = {
    isLogin({commit},res){
        commit(types.USER_SET,res)
    }
}

const getters = {

    isLogin:(state)=>{
        if(state.currentUser){
            return true
        }else{
            return false
        }
    },
    currentUser:(state)=>{
        if(state.currentUser){
            return state.currentUser
        }else{
            return{}
        }
    }
}

const mutations = {
    [types.USER_SET](state,currentUser){
        state.currentUser = currentUser
        localStorage.setItem('currentUser',JSON.stringify(currentUser))
    },
    [types.USER_DEL](state){
        state.currentUser = null
        localStorage.removeItem('currentUser')
    }
}

export default{
    state,
    actions,
    getters,
    mutations
}

