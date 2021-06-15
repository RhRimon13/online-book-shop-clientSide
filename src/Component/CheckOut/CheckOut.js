import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import CoutHeader from '../Header/CoutHeader';

const CheckOut = () => {
    const { bookId } = useParams()
    const [selectedBook, setSelectedBook] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkOutTime: new Date()
    });

    useEffect(() => {
        fetch(`https://hidden-anchorage-96552.herokuapp.com/checkOut/${bookId}`)
            .then(res => res.json())
            .then(data => setSelectedBook(data))
    }, [bookId]);


    const proceedCheckOut = () => {
        const newCheckOut = { ...loggedInUser, ...selectedBook, ...selectedDate };

        fetch(`https://hidden-anchorage-96552.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCheckOut)
        })
            .then(res => console.log('server side res', res))
    }


    return (
        <div>
            <CoutHeader />
            <div>
                <h1 className="text-center">Checkout</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedBook.name}</td>
                            <td>1</td>
                            <td>{selectedBook.bookPrice}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>{selectedBook.bookPrice}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={proceedCheckOut}>Checkout</Button>
            </div>
        </div>
    );
};

export default CheckOut;