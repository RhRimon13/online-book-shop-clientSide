import React from 'react';
import { Table } from 'react-bootstrap';

const ManageBooks = (props) => {
    const { name, authorName, bookPrice, bookId } = props.bookManager;
    const removeBook = (bookId) => {
        fetch(`https://hidden-anchorage-96552.herokuapp.com/removeBook/${bookId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log('Deleted Successfully', data))
    };
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Book Name:<br />{name}</td>
                        <td>Author Name:<br />{authorName}</td>
                        <td>Book Price:<br />{bookPrice}</td>
                        <td><button onClick={() => removeBook(bookId)} className="btn btn-danger">Delete Books</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBooks;