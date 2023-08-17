import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))

    }, []);
    const handleAddToCart = (product) =>{
      const newCart = [...cart, product];
      setCart(newCart); 
    }

    return (
        
        <div className='shop-container'>
            <div className="product-container">
           
           {
            products.map(product => <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
                 product={product}>
                 </Product> )
            }
            
            </div>
            <div className="cart-container">
             <h>Order Summary</h>
             <p>Total Add: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;