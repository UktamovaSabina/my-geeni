import React, { useRef } from 'react';
import './Hero-section.css';
import lamp from '../../assets/Hero-images/lamp.svg';
import socket from '../../assets/Hero-images/socket.svg';
import camera from '../../assets/Hero-images/camera.svg';
import sensor from '../../assets/Hero-images/sensor.svg';
import lifeStyle from '../../assets/Hero-images/lifestyle-vase.svg';
import strippedLights from '../../assets/Hero-images/stripped-lights.svg';

const HeroSection = () => {

  const modalka = useRef();
  const enjoyBtn = useRef();

  function showModal() {
    modalka.current.classList.toggle("d-none");
    enjoyBtn.current.classList.toggle("d-none");
  }
  
  function closeModal() {
    modalka.current.classList.toggle("d-none");
    enjoyBtn.current.classList.toggle("d-none");
  }

  return (
    <section className='hero-section'>
      <div className="container hero-container">
        <h2>One Home. One App.</h2>
        <h3>Shop By Category</h3>
        <ul className='categories-list'>
          <li><a href="#"><img src={lamp} width={100} alt="" />
            <p className='category'>Lighting</p></a></li>
          <li><a href="#"><img src={socket} width={100} alt="" /> <p className='category'>Power and Switches</p></a></li>
          <li><a href="#"><img src={camera} width={100} alt="" /> <p className='category'>Cameras</p></a></li>
          <li><a href="#"><img src={sensor} width={100} alt="" /> <p className='category'>Sensors</p></a></li>
          <li><a href="#"><img src={lifeStyle} width={100} alt="" />  <p className='category'>Lifestyle</p></a></li>
          <li><a href="#"><img src={strippedLights} width={100} alt="" /> <p className='category'>Strip Lights</p></a></li>
        </ul>

        <ul className='categories__brands'>
          <li><a href="#">GEENI</a></li>
          <li><a href="#">MERKURIY</a></li>
          <li><a href="#">iHOME</a></li>
        </ul>

        <div className='enjoy-btn' onClick={showModal} ref={enjoyBtn}>
          <h4>Enjoy 10%</h4>
          <span>Off!</span>
        </div>

        <div className='modal-wrapper d-none' ref={modalka}>
        <div className='modalka'>
          <div className='close-modalka' onClick={closeModal}>X</div>
          <h2>Enjoy 10% OFF
            your first order!</h2>
            <p>Sign up to be the first to know about the latest products and promotions.</p>
          <form>
            <input required type={'text'} placeholder='Name' />
            <input required type={'text'} placeholder='Email' />
            <button type={'submit'} className='sign-up-btn'>SIGN UP</button>
          </form>
          <a href="#">*Cannot be combined with other offers.</a>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default HeroSection