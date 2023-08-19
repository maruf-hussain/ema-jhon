import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Revie/Review';

const Orders = () => {
    const products = useLoaderData();
    console.log()
    return (
        <div className='shop-container'>
           
          <div className='product-container'>
          
          <h2> Order Page: {products.length}</h2>
         

            </div>  

            <div className='cart-container'>
            <Cart cart={[]} > </Cart>

            </div>
        </div>
    );
};

export default Orders;