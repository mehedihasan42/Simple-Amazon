import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
  
    const tax = parseInt(totalPrice*.07);
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div>
             <h2>Order Summery</h2>
             <p>Selected Items:{quantity}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total Shipping Charge: ${totalShipping}</p>
             <p>Tax: ${tax}</p>
             <p>Grand Total: ${grandTotal}</p>
             <button>Clear Cart</button>
             <button>Review Order</button>
        </div>
    );
};

export default Cart;