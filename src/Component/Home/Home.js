import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Header from '../Header/Header';

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://hidden-anchorage-96552.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div>
            <Header />
            <div className="row">
                {
                    books.map(book => <Books book={book}></Books>)
                }
            </div>
        </div>
    );
};

export default Home;