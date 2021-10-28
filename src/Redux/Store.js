import {applyMiddleware, createStore, combineReducers, compose} from "redux"
import {User} from "../Reducer/User"
import { logger } from 'redux-logger'
import thunk from "redux-thunk"

export const ConfigureStore = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(combineReducers({
        User, 
    }), composeEnhancers(applyMiddleware(thunk, logger)))
}