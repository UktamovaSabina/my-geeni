import React from 'react';
import HeaderBrands from './HeaderBrands';
import HeaderNavbar from './HeaderNavbar';
import FreeShipping from './Free-Shipping';

const Header = () => {
    return (
        <header>
            <HeaderBrands/>
            <HeaderNavbar/>
            <FreeShipping/>
        </header>
    )
}

export default Header