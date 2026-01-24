import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd)=> total + prd.price,0);
    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice> 15){
        shipping = 12.99;
    }
    else{
        shipping = 4.99;
    }

    const tax = totalPrice/10;


    return (
        <div>
            <h4>Order Summer</h4>
            <p>Items Ordered:  {cart.length}</p>
            <p>Product Price: {totalPrice}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT : {tax}</p>
            <p>Total Price : {totalPrice + tax + shipping}</p>

        </div>
    );
};

export default Cart;