import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderHeader from '../Header/OrderHeader';
import OrderDetails from '../OrderDetails/OrderDetails';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://hidden-anchorage-96552.herokuapp.com/order?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [loggedInUser.email])
    return (
        <div>
            <OrderHeader />
            <div>
                <h1 className="text-center">{loggedInUser.userName} you have {orders.length} order</h1>
                {
                    orders.map(order => <OrderDetails order={order} key={order.bookId}></OrderDetails>)
                }
            </div>
        </div>
    );
};

export default Order;