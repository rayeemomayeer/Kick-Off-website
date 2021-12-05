import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvvKqAracM2g0jmJE0ukfPwQ4PEptmVDNgREaHfZpe1b4W4qeiRL6tACjxnpUZDJEkS1c4Jr5JmtozHTGRNHuyU00sox5VvZ1');

const Payment = () => {
  const {user, token} = useAuth();
  let price = 0;
  const [orders, setOrders] = useState([]);
  
  useEffect(()=>{
    const url = `https://safe-beyond-59939.herokuapp.com/myOrders?email=${user.email}`
    fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token])

  orders.map(order=>price += order.details.price)

  return (
    <div>
      <h1 className="text-7xl text-center">Payment system coming soon...</h1>
      {/* <h1 className="text-5xl text-center">
        Payment for {orders.length} orders price $ {price}
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} user={user} />
      </Elements> */}
    </div>
  );
};

export default Payment;