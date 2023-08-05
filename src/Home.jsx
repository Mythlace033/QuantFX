import React from 'react';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Advantages from './Advantages';
import './App.css';
import  Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Services from './Services';
import Solutions from './Solutions';
import Statements from './Statements';
import Work from './Work';
import Blogpost from './components/Blogpost';



function App() {
  return (
    <>
    <Navbar />
    {/* <About1 /> */}
    <Header />
   <Blogpost/>
    <Work />
    <Services/>
    <Advantages />
    <Statements />
    <Solutions />
    <Footer />
    
    </>
  );
}
export default App;
