import React, { useEffect, useState } from 'react'
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addProducts } from '../store/productsSlice';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProducts = async() => {
            setLoading(true);
            try {
                const response = await axios.get(`https://dummyjson.com/products`);
                setProducts(response.data.products);
                const productsData = {products: response.data.products}
                dispatch(addProducts(productsData));
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if(loading){
        return(
            <div>Loading..............</div>
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
