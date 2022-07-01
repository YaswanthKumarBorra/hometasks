import { FETCH_BOOK_INIT, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAIL } from "../actions/types"

const initialState = {
    isLoading: false,
    data: [],
    isError: false
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOK_INIT:
            return {
                ...state,
                isLoading: true,
                data: [],
                isError: false
            }
        case FETCH_BOOK_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                isError: false
            }
        case FETCH_BOOK_FAIL:
            return {
                isLoading: false,
                data: [],
                isError: true
            }
        default: 
            return state
    }
}

export default bookReducer;