import axios from 'axios';
import { FETCH_BOOK_INIT, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAIL } from './types';

const url = "http://localhost:5000/books";
const fetchBookLoading = () => {
    return {
        type: FETCH_BOOK_INIT
    }

}

const fetchBookSuccess = (data) => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload:data
    }
}

const fetchBookFail = () => {
    return {
        type: FETCH_BOOK_FAIL
    }

}

const fetchBook = () => async (dispatch) => {
    try {
        dispatch(fetchBookLoading());
        const res = await axios.get(url)
        console.log(res.data)
        dispatch(fetchBookSuccess(res.data))
        
    }
    catch(ex) {
        dispatch(fetchBookFail())
    }
}

export default fetchBook;