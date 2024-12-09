import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((item, index) => {
        return (
            <li key={index}>{item.name}</li>
        )
      })}
    </div>
  )
}

export default Cart
