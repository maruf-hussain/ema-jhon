import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,price,img, seller,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
   
    return (
        
        <div className='product'>
              <img  src={img}></img> 
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings} Star</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add To Cart<span
             style={{marginLeft:'5px'}}>
                 < FontAwesomeIcon icon={faCartShopping} />
            </span>
           </button>
        </div>
        
    );
};

export default Product;