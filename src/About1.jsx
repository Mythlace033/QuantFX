import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import aboutimg from './images/meeting.png';
import AboutApi from './API/AboutApi.jsx';

const About1 = () => {

    const [data,setData] = useState(AboutApi);

  return (
    <>
    <div className="about1-main">
    <div className='container'>
        <h1>Connect</h1>
      </div>
      <div className="about1">
        <div className="container">
            <div className="row">
                <div className="col-6 col-md-6 col-lg-5">
                 <h1>with Our Circle</h1> 
                 <hr className='hr4'/>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore eaque et dolorem consequuntur. sit amet consectetur, adipisicing elit. Inventore eaque et dolorem consequuntur. Sint odio quos laboriosam possimus error debitis facere, itaque illum velit qui dolores tempore adipisci sed laborum fuga omnis. Aut numquam obcaecati enim.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ratione nihil animi earum illum omnis neque saepe possimus modi. Consectetur, quaerat. Nulla, vitae odio!</p>
                </div>
            </div>
        </div>
        <div className="row "></div>
            <div className="  col-6 col-md-6 col-lg-4  about1-img">
                <img src={aboutimg} alt="Error" />
            </div>
        
      </div>
    </div>
     
     <div className="client">
        <div className="container">
            <h2>Our Clients</h2><hr className='hr5'/>

            <div className="row">
                    {
                    data.map((ele)=>{
                        const {id,image} = ele;
                        
                        return(
                            <>
                                <div className="col-4 col-md-4 col-lg-4 " key={id}>
                                    <img src={image} alt="Error" />
                                </div>
                            </>
                            );
                    })
                }

                </div>

        </div>
     </div>

     <div className="about1-footer">
        <div className="container">
         <h3>Let's Start Building web solutions to help <br />Achieve your business goal</h3>
        </div><br /><br /><br /><br />
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

export default About1;
