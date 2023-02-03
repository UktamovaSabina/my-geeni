import React from 'react';
import './HeaderNavbar.css';
import logo from '../../assets/Header-images/logo-geeni.png';
import avatar from '../../assets/Header-images/avatar.png';
import cart from '../../assets/Header-images/cart.png';
import search from '../../assets/Header-images/search.png';
// import

const HeaderNavbar = () => {
  return (
    <div className='container navbar-container'>
        <a href="/"><img src={logo} alt="logo of the site" /></a>

        <div className='navbar-compile'>
        <ul className='header-navbar'>
          <li><a href="#">Deals</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">About Us</a></li>
        </ul>

        <ul className='settings-nav'>
          <li><a href="#"><img width={20} src={avatar} alt="setting" /></a></li>
          <li><a href="#"><img width={27} src={cart} alt="setting" /></a></li>
          <li><a href="#"><img width={20} src={search} alt="setting" /></a></li>
        </ul>
        </div>
    </div>
  )
}

export default HeaderNavbar