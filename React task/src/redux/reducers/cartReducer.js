import { ADD_TO_CART, EMPTY_CART, ADD_ORDER, UPDATE_ADDRESS, REMOVE_FROM_CART, EMPTY_ADDRESS } from "../actions/types";

const initialState = {
    cartArr: [],
    orders: [],
    address: {},
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartArr: [...state.cartArr, action.payload]
            }
        case REMOVE_FROM_CART:
            const data = state.cartArr.filter((ele) => ele.id !== action.payload)
            return {
                ...state,
                cartArr: data
            }

        case EMPTY_CART:
            return {
                ...state,
                cartArr: []
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case EMPTY_ADDRESS:
            return {
                ...state,
                address: {}
            }
        default:
            return state;
    }
}

export default cartReducer;