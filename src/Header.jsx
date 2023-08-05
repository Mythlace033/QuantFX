import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css";
const Header = () => {
  return (
    <>
       <div className='header'>
        <div className="container">
          <Video className="vedio" id="background-video" height="322" autoPlay loop muted>
              <source src='./images/video.mp4' type='video/webm'/>
          </Video>
          {/* <form className="d-flex">
             <button className="btn  btn-style" type=""> Explore more </button>
          </form> */}
          {/* kiiii */}
          {/* jojjj */}
        </div>
       </div>
  
    </>
  )
}

export default Header;
