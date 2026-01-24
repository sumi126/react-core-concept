import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Shop = () => {
    console.log(fakeData); 
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddCart = (product) =>{
        console.log('Product added',product);
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className='shop-container' >
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        key={pd.id}
                        product={pd} 
                        handleAddCart={handleAddCart}>
                        key={pd.id}
                        </Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;