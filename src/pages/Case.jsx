import React,{useState} from 'react'
import Navbar from '../Navbar';
import Work from '../Work';
import Footer from '../Footer';
import AboutApi from '../API/AboutApi.jsx';
import { NavLink } from 'react-router-dom';

const Case = () => {
  const [data, setData] = useState(AboutApi);
  return (
    <>
     <Navbar/>
     <Work />

    <div className="container ">
      <div className="industries">
      <h2>Industries</h2><hr />
    <div className="row">
                    {
                    data.map((ele)=>{
                        const {id,image,info} = ele;
                        
                        return(
                            <>
                                <div className="col-3 col-md-3 col-lg-3 industries1" key={id}>
                                    <img src={image} alt="Error" />
                                    <h3>{info}</h3>
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


     <Footer />
      
    </>
  )
}

export default Case;
