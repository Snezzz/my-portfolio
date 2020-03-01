import {combineReducers} from 'redux'
import {userReducer,dbReducer,infoReducer,portfolioReducer,contactsReducer,elementReducer} from "./secondReducer";

export const rootReducer = combineReducers({
    userReducer,dbReducer,infoReducer,portfolioReducer,contactsReducer,elementReducer
});