import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price,img, seller,ratings} = props.product;
    return (
        
        <div className='product'>
              <img  src={img}></img> 
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
        
    );
};

export default Product;