import React from 'react';
import { useHistory } from 'react-router';
import './Books.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


const Books = (props) => {
    console.log(props.book);
    const { imageUrl, name, authorName, bookPrice, bookId } = props.book;
    const history = useHistory();
    const goForCheckOut = (bookId) => {
        history.push(`/checkOut/${bookId}`);
    }

    return (
        <div className="col-md-4 container">
            <div className="card h-100 card-div">
                <img src={imageUrl} alt="" />
                <div className="card-body ">
                    <h2 className="card-title"> {name} </h2>
                    <h5 className="card-text"> {authorName}  </h5>
                </div>
                <div className="card-footer">
                    <h4 className="book-price"> <FontAwesomeIcon icon={faDollarSign} />{bookPrice}</h4>
                    <button className="btn btn-secondary" onClick={() => goForCheckOut(bookId)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Books;