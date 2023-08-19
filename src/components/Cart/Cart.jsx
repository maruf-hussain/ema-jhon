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
const tax = total*12/100;
const discount = parseInt(total*5/100);
const grandTotal = parseInt(total + totalShipping + tax -discount) ;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
             <h4 style={{backgroundColor:'yellow', color:'black', padding:'10px', borderRadius:'20px', textAlign:'center' }}>Total Add: {cart.length}</h4>

             <p>Total Price: <span style={{marginLeft:'96px'}}>${total}</span></p>
             <p>Total Shipping: <span style={{marginLeft:'65px'}}>${totalShipping}</span>  </p>
             <p>Tax: <span style={{marginLeft:'155px'}}>${tax.toFixed(2)}</span> </p>
             <p>Discount: <span style={{marginLeft:'115px'}}>${discount}</span> </p>
             <hr />
             <h2 >Grand Total:<span style={{marginLeft:'65px'}}>${grandTotal}</span>  </h2>

        </div>
    );
};

export default Cart;