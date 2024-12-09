import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { fetchProducts } from '../store/productsSlice';

const Product = () => {
    const { products, status, error } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    //render logic based on status
    if(status === "loading"){
        return (
            <div>Loading..............</div>
        )
    }
    if(status === "failed"){
        return (
            <div>error: {error}.</div>
        )
    }

    //Handle Change
    const handleChange = (e) => {
        const title = e.target.options[e.target.selectedIndex].text;
        const price = parseFloat(parseFloat(e.target.value).toFixed(2));

        const itemObj = { title, price };

        //Add selected item to the cart
        dispatch(addToCart(itemObj));
    }
  return (
    <div>
        <h1>Products Details</h1>
      <select onChange={(e)=>handleChange(e)}>
        {products.map((item, index)=>{
            return(
                <option key={index} value={item.price}>{item.title} : {item.price}</option>
            )
        })}
      </select>
    </div>
  )
}

export default Product
