import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const Product = () => {
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    //Handle Change
    const handleChange = (e) => {
        const name = e.target.options[e.target.selectedIndex].text;
        const price = parseInt(e.target.value);
        const itemObj = { name, price };

        //Add selected item to the cart
        dispatch(addToCart(itemObj));
    }
  return (
    <div>
        <h1>Products Details</h1>
      <select onChange={(e)=>handleChange(e)}>
        {products.map((item, index)=>{
            return(
                <option key={index} value={item.price}>{item.name} : {item.price}</option>
            )
        })}
      </select>
    </div>
  )
}

export default Product
