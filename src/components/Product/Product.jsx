import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price,img, seller,ratings} = props.product;
    return (
        <div className='product'>
            <img style={{width:'100%', borderRadius:'20px'}} src={img}></img>
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <h4>Seller: {seller}</h4>
            <h2>Ratings: {ratings}</h2>
            <button>Add To Cart</button>
        </div>
        
    );
};

export default Product;