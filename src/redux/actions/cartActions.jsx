import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_LOADER} from './actionTypes';


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}


export const removeFromCart = (id) => {
    return {
        type:REMOVE_FROM_CART,
        id
    }
}

export const clearCart = () =>{
    return {
        type: CLEAR_CART
    }
}

export const setLoader = (payload) => {
    return {
        type: SET_LOADER,
        payload
    }
}