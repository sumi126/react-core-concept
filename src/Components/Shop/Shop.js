import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Shop = () => {
    console.log(fakeData);
    
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    return (
        <div className='shop-container' >
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd}></Product> )
                }
            </div>
            <div className="cart-container">
                <h3>This is for cart</h3>
            </div>
            
        </div>
    );
};

export default Shop;