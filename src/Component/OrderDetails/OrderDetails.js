import React from 'react';
import { Table } from 'react-bootstrap';

const OrderDetails = (props) => {
    const { authorName, name, userName, bookPrice, checkOutTime } = props.order;
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>User name:<br />{userName}</td>
                        <td>Book Name:<br />{name}</td>
                        <td>Author Name:<br />{authorName}</td>
                        <td>Order Time:<br />{new Date(checkOutTime).toDateString('dd/MM/yyyy')}</td>
                        <td>Book Price:<br />{bookPrice}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default OrderDetails;