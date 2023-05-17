import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home2 from './components/Home2';
// import Contact from './components/Contact';
// import Services from "./components/Services";
import './styles/App.scss';
import './styles/Header.scss';
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/MediaQuery.scss";

import Design from './components/Design';

const Home2 = lazy(()=>import('./components/Home2'));
const Header =lazy(()=>import('./components/Header'));
const Contact = lazy(()=>import('./components/Contact'));
const Services = lazy(()=>import('./components/Services'));


function App() {
return(
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Suspense fallback={<Design/>} ><Home2/></Suspense>}/>
    <Route path='/contact' element={<Suspense fallback={<Design/>} ><Contact/></Suspense>}/>
   <Route path='/services' element={<Suspense fallback={<Design/>} ><Services/></Suspense>}/>
  </Routes>

</Router>

)

}


export default App;
