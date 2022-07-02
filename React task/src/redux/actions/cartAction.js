import { ADD_ORDER, ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, UPDATE_ADDRESS, EMPTY_ADDRESS } from "./types";

export const addToCart = (book) => async (dispatch) =>{
    dispatch({
        type: ADD_TO_CART,
        payload: book,
    })
}

export const removeFromCart = (id) => async (dispatch) =>{
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}

export const emptyCart = () => async (dispatch) =>{
    dispatch({
        type: EMPTY_CART,
    })
}

export const addToOrders = (orders) => async (dispatch) =>{
    dispatch({
        type: ADD_ORDER,
        payload: orders,
    })
    dispatch(emptyCart())
}

export const saveAddress = (address) => async (dispatch) =>{
    dispatch({
        type: UPDATE_ADDRESS,
        payload: address,
    })
}

export const emptyAddress = () => async (dispatch) =>{
    dispatch({
        type: EMPTY_ADDRESS,
    })
}