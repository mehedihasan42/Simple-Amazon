import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
  
    const tax = parseInt(total*.07);
    const grandTotal = total + totalShipping + tax;

    return (
        <div>
             <h2>Order Summery</h2>
             <p>Selected Items:{cart.length}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shipping Charge: ${totalShipping}</p>
             <p>Tax: ${tax}</p>
             <p>Grand Total: ${grandTotal}</p>
             <button>Clear Cart</button>
             <button>Review Order</button>
        </div>
    );
};

export default Cart;