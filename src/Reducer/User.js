import * as ActionTypes from "../Constants/UserConstant"
import { removeFromLS } from "../Shared/writeToLS"

const initialState = {
    isLoading: false,
    user: [],
    username:[],
    loggedIn: localStorage.getItem('token') ? true : false,
    errMess: null
}

export const User = (state = initialState, action) => {
    console.log('actionnnn',action)
    switch (action.type) {
        default:
            return state
        case ActionTypes.LOGIN_LOADING:
            return {...state, isLoading: true}
        case ActionTypes.LOGIN_SUCCESS:
            return {...state, isLoading: false,loggedIn: true}
        case ActionTypes.LOGIN_FAILED:
            return {...state, errMess: action.payload, isLoading: false }
        case ActionTypes.LOGOUT_SUCCESS:
            removeFromLS('token')
            return {...state, isLoading: false, loggedIn: false, errMess: null}
        case ActionTypes.LOGOUT_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        case ActionTypes.GET_USER_SUCCESS:
            return {...state, isLoading: false, user: action.payload, errMess: null}
        case ActionTypes.GET_USER_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        
    }
}