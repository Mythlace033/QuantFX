import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './App.css';

import Case from './pages/Case';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Service from './pages/Service';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Blogpost from './components/Blogpost';



function App() {
  return (
    <>

  
     <Routes>
      <Route exact path='/' element={ <Home/>}/>
      <Route exact path='Blogpot' element={ <Blogpost />}/>
      <Route exact path='/case studies' element={ <Case />}/>
      <Route exact path='/services' element={ <Service/>}/>
      <Route exact path='/about us' element={ <About />}/>
      {/* <Route exact path='/about us' element={ <Statements />}/> */}
      <Route exact path='/career' element={ <Career />}/>
      <Route exact path='/contact' element={ <Contact />}/>
      
    </Routes>
    
    </>
  );
}

export default App;
