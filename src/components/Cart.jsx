import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const Cart = () => {
    const { cart, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (index, price) => {
        dispatch(removeFromCart({index, price}));
    }
  return (
    <div>
        <h2>CART DETAILS</h2>
      {cart.map((item, index) => {
        return (
            <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10
            }}>
                <li>{item.title}</li>
                <button onClick={() => handleRemoveItem(index, item.price) }>Delete</button>
            </div>
        )
      })}
      <hr />
      <h2>TOTAL AMOUNT</h2>
      <p>Rs: {parseFloat(total).toFixed(2)}</p>
    </div>
  )
}

export default Cart
