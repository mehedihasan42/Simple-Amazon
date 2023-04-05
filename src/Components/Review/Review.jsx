import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import { removeFromDb } from '../../assets/utilities/fakedb';

const Review = () => {
    const saveCart = useLoaderData()
    const [cart,setCart] = useState(saveCart)

    const handDaleFormCart = (id)=>{
        const remaining = cart.filter(product=>product.id !== id)
        setCart(remaining);
        removeFromDb(id)
    }

    console.log(saveCart)
    return (
       <div className='Shop'>
         <div className=''>
            {
                cart.map(product=><ReviewItem
                key={product.id}
                product={product}
                handDaleFormCart={handDaleFormCart}
                ></ReviewItem>)
            }
        </div>
        <div className='Cart-container'>
            <Cart cart={cart}></Cart>
        </div>
       </div>
    );
};

export default Review;