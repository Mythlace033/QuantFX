import React from 'react';
import logo1 from './images/web3x-black.png';
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
            <div className="row">
            <div className="social-icons">
                     <i className="fa-brands fa-linkedin-in"></i>
                     <i className="fa-brands fa-facebook-f"></i>
                     <i className="fa-brands fa-instagram"></i>
                    </div>
                <div className="col-6 col-md-5 col-lg-5">
                    
                   
                   <img src={logo1} alt="logo1" width="80px"/><br /><br />
                   <p>A digital design & development company</p>
                </div>
                <div className="col-6 col-md-5 col-lg-4">
                   <h2>India HQ</h2>
                   <p>E-304,Third Floor,Pahse-8A,Industrial Area, Sector-75,Mohali</p>
                   <p><b>+91 81469 09341</b></p>
                </div>
            </div>
            
            <hr />
            <div className="footer">
               <p>&copy; 2022 WebThreeX.All rights reserved.</p>
            </div>

        </div>
      </div>
    </>
  )
}

export default Contact;
