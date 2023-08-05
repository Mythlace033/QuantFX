import React from 'react'
import logo from './images/forex.jpg';
import { NavLink } from 'react-router-dom';
// import Services from './Services';

const Navbar = () => {
  return (
    <>
     <section className=" navbar-bg">
            <nav className=" navbar navbar-expand-lg navbar-light ">
  <div className="container">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img src={logo} alt="logo" width="230px" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Articles</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/case studies">Our Story</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about us">Buy Software</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Free Softare</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/career">More</NavLink>
        </li>
        
      </ul>
      <form className="d-flex">
        <button className="btn  btn-style" type="submit"> Get In Touch </button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar;
