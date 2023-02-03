import React from 'react';
import './HeaderNavbar.css';
import logo from '../../assets/Header-images/logo-geeni.png';
import avatar from '../../assets/Header-images/avatar.png';
import cart from '../../assets/Header-images/cart.png';
import search from '../../assets/Header-images/search.png';

const HeaderNavbar = () => {
  return (
    <div className='container navbar-container'>
        <a href="/"><img src={logo} alt="logo of the site" /></a>

        <div className='navbar-compile'>
        <ul className='header-navbar'>
          <li><a href="https://kun.uz">Deals</a></li>
          <li><a href="https://kun.uz">Products</a></li>
          <li><a href="https://kun.uz">Support</a></li>
          <li><a href="https://kun.uz">About Us</a></li>
        </ul>

        <ul className='settings-nav'>
          <li><a href="https://kun.uz"><img width={20} src={avatar} alt="setting" /></a></li>
          <li><a href="https://kun.uz"><img width={27} src={cart} alt="setting" /></a></li>
          <li><a href="https://kun.uz"><img width={20} src={search} alt="setting" /></a></li>
        </ul>
        </div>
    </div>
  )
}

export default HeaderNavbar