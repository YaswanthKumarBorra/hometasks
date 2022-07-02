import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import {addToCart} from '../redux/actions/cartAction'
const Details = () => {
    const location = useLocation();
    const {books} = location.state;
    const book = books.bookD;

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const AddingToCart = () => {
        alert('Added to Cart')
        dispatch(addToCart(book))
    }

    const goToCart = useCallback(() => navigate('/cart'),[navigate])
    const Buy = () => {
        dispatch(addToCart(book))
        goToCart() 
    }

    return (
        <>
            <div className='book-info'>
                <div className='bookinfo-coverpage'>
                    <img src={book.coverPage} alt="coverpage" width="250px" />
                </div>
                <div className='bookinfo-details'>
                    <span className='bookinfo-title'>Book Title : {book.title}</span><br/>
                    <span className='bookinfo-price'>Book Price : Rs. {book.price}</span><br/>
                    <span className='bookinfo-author'>Author : {book.author}</span><br/>
                    <span className='page-count'>Page Count : {book.pageCount}</span><br/>
                    <span className='book-isbn'>ISBN : {book.ISBN}</span><br/>
                    <div className='btns'>
                        <button onClick={AddingToCart}>Add to Cart</button>
                        <button onClick={Buy}>Buy Now</button>
                    </div>
                </div>
            </div>
            <p className='bookinfo-descp'><label>Description :</label><br/>{book.description}</p>
        </>
    )
}

export default Details;