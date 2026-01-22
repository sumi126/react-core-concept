import React from 'react';
import logo from './Header.png';
import css from './Header.css';


const Header = () => {
    return (
        <div style={css} className='header'>
            <img src={logo} alt="" />
            <nav><a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;