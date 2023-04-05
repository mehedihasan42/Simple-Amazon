import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [cart,setCart] = useState([])
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[]);

   useEffect(()=>{
    const storedCart = getShoppingCart();
    const savedCart = []
    //step 1: get id of the addedProduct
    for(const id in  storedCart){
        //step 2:get product form products by using id
        const addedProduct = products.find(product=>product.id===id)
        if(addedProduct){
          //step 3:add quantity
          const quantity = storedCart[id]
          addedProduct.quantity = quantity;
          //step 4: add the addedProduct to the savedCart
          savedCart.push(addedProduct)
        }
        // console.log('added product',addedProduct)
    }
    //step 5:set the cart
    setCart(savedCart);
   },[products])

    const handleByBtn = (product)=>{
      const newCart = [...cart,product]
      setCart(newCart)
      addToDb(product.id)
     };

    return (
        <div className='Shop'>
            <div className="Shop-container">
              {
                products.map(product =><Product key={product.id}
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