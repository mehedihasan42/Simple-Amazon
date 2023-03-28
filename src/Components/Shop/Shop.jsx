import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart,setCart] = useState([])
    const [product,setProduct] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=>setProduct(data))
    },[]);

    const handleByBtn = (product)=>{
      const newCart = [...cart,product]
      setCart(newCart)
     };

    return (
        <div className='Shop'>
            <div className="Shop-container">
              {
                product.map(product =><Product key={product.id}
                product={product}
                handleByBtn={handleByBtn}
                ></Product>)
              }
            </div>
            <div className="Cart-container">
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;