import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import fetchBook from '../redux/actions/bookAction';

const Home = () => {

    const isLoading = useSelector((state) => state.book.isLoading);
    const bookData = useSelector((state) => state.book.data);
    const isError = useSelector((state) => state.book.isError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBook());
    },[dispatch])

    const ShowBooks = () => {
        if(isLoading) {
            return (
                <h1 style={{textAlign: "center"}}>Loading...</h1>
            )
        }
        if(isError) {
            return (
                <h1 style={{textAlign: "center"}}>Something went wrong...</h1>
            )
        }
        return(
            <div className='book-container'>
                { 
                    bookData.map((bookD) => {
                    return (
                        <div className="books" key={bookD.id}>
                            <div className='book-coverpage'>
                                <img src={bookD.coverPage} alt="coverpage" width="200px"/>
                            </div>
                            <div className='book-details'>
                                <span className="book-title">{bookD.title}</span><br/>
                                <span className="book-price">Rs.{bookD.price}</span>
                            </div>
                        <Link to="/details" state={{books: {bookD}}}><button className="buy-btn">Buy</button></Link>
                    </div>
                    )
                })
                }
            </div>
        )
    }

    return(
        <div className='container'>
            <ShowBooks />
        </div>
    )
    
    
}

export default Home;