import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({product,handDaleFormCart}) => {
    const {img,id,price,name,quantity} = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='review-title'>{name}</p>
                <p className='pera'>Price:<span className='price'>${price}</span></p>
                <p className='pera'>Product Quantity:<span className='price'>${quantity}</span></p>
            </div>
            <div>
                <button onClick={()=> handDaleFormCart(id)} className="dlt-logo"> <FontAwesomeIcon className='icon' icon={faTrash} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;