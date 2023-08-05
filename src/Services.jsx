import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container ">
            <h1>Services</h1><hr className='hr2'/>
            <p>Lorem ipsum dolor sit amet consectetur aftab ansari affudon web3x adipisicing elit. Deserunt aperiam nesciunt est quis <br /> deleniti aspernatur magni harum asperiores nihil quidem! deleniti aspernatur magni harum asperiores nihil quidem! <br />deleniti aspernatur magni harum asperiores nihil quidem!</p>
            <div className="row">
                <div className="col-12 col-md-5 col-lg-6 col-service">
                    <h5>01</h5>
                    <h1>Web development</h1>
                    <ul>
                        <li>UX Design</li>
                        <li>Backend</li>
                        <li>Digital map</li>
                    </ul>
                </div>
                <div className="col-12 col-md-5 col-lg-6 col-service">
                    <h5>02</h5>
                    <h1>Android development</h1>
                    <ul>
                        <li>UX Design</li>
                        <li>Backend</li>
                        <li>Digital map</li>
                    </ul>
                </div>
            </div>
            <div className="row">
            <div className="col-12 col-md-5 col-lg-6 col-service">
                    <h5>03</h5>
                    <h1>Android development</h1>
                    <ul>
                        <li>UX Design</li>
                        <li>Backend</li>
                        <li>Digital map</li>
                    </ul>
                </div>
                <div className="col-12 col-md-5 col-lg-6 col-service">
                    <h5>04</h5>
                    <h1>Grow your products</h1>
                    <ul>
                        <li>UX Design</li>
                        <li>Backend</li>
                        <li>Digital map</li>
                    </ul>
                </div>
            </div>
            <form className="d-flex">
             <button className="btn  btn-style-service" type=""> view our services <i className="fa-solid fa-arrow-right"></i> </button>
          </form>
        </div>
        <div className="service-footer-main">
            <div className="triangle"></div>
            <div className="service-footer ">
                <p>We had to help with your product <NavLink to="">Let's talk</NavLink></p>
            </div>
        </div>
         
        </div>
    </>
  )
}

export default Services;
