import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const { cart, total } = useSelector((state) => state.cart);
  return (
    <div>
        <h2>CART DETAILS</h2>
      {cart.map((item, index) => {
        return (
            <li key={index}>{item.name}</li>
        )
      })}
      <hr />
      <h2>TOTAL AMOUNT</h2>
      <p>Rs: {total}</p>
    </div>
  )
}

export default Cart
