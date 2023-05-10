import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home2 from './components/Home2';
import Contact from './components/Contact';
import Services from "./components/Services";

import './styles/App.scss';
import './styles/Header.scss';
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/MediaQuery.scss";
import Footer from './components/Footer';


function App() {
return(
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home2/>}/>
    <Route path='/contact' element={<Contact/>}/>
   <Route path='/services' element={<Services/>}/>
  </Routes>

</Router>

)

}


export default App;
