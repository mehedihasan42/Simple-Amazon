import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Product = (props) => {
    // console.log(props)
    // console.log(product.name)
    const { img, name, price, seller, ratings } = props.product;
    const handleByBtn = props.handleByBtn;



    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <p>Price:${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating:{ratings} Stars</p>
            </div>
            <button onClick={() => handleByBtn(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;