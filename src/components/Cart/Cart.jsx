import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart..........option 1
    // ..................option 2
// const {cart} = props; 

let total = 0;
let totalShipping = 0;

for(const product of cart){
  total = total + product.price;
    totalShipping = totalShipping + product.shipping;
   
   
}
const tax = total*7/100;
const discount = parseInt(total*20/100);
const grandTotal = (total + totalShipping + tax -discount) ;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
             <h4>Total Add: {cart.length}</h4>
             <p>Total Price: ${total} </p>
             <p>Total Shipping: ${totalShipping}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <p>Discount ${discount}</p>
             <h2>Grand Total ${grandTotal.toFixed(2)}</h2>

        </div>
    );
};

export default Cart;