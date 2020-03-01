import {connectToDB} from "../connect";

export const userReducer = (store={}, action) =>{

    switch (action){
        case "ADD_CHILDREN":
            return action.type
        default:
            return store
    }
};

const db = connectToDB();

export const dbReducer = (store = db, action)=>{
    switch (action.type){
        case "CHANGE_DB":
            return action.db;
        default:
            return store
    }
};

export const infoReducer = (store={},action) => {
    switch (action.type){
        case "GET_ABOUT":
            return JSON.parse(action.info);
        default:
            return store;
    }
};
export const contactsReducer = (store={},action) => {
    switch (action.type){
        case "GET_CONTACTS":
            return JSON.parse(action.info);
        default:
            return store;
    }
};
export const portfolioReducer = (store={},action) => {
    switch (action.type){
        case "GET_PORTFOLIO":
            return JSON.parse(action.info);
        default:
            return store;
    }
};

export const elementReducer = (store = {}, action) => {
    switch (action.type){
        case "SWITCH":
            return action.el;
        default:
            return store;
    }

}

