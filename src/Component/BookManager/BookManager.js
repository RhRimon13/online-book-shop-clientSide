import React, { useEffect, useState } from 'react';
import BookmgHeader from '../Header/BookmgHeader';
import ManageBooks from '../ManageBooks/ManageBooks';

const BookManager = () => {
    const [bookManagers, setBookManagers] = useState([]);

    useEffect(() => {
        fetch('https://hidden-anchorage-96552.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBookManagers(data))
    }, [])


    return (
        <div>
            <BookmgHeader />
            <div>
                {
                    bookManagers.map(bookManager => <ManageBooks bookManager={bookManager}></ManageBooks>)
                }
            </div>
        </div>
    );
};

export default BookManager;