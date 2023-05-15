import React,{useEffect} from 'react'
import svd from "../assets/image5.png"
import Footer from './Footer'
import sg from "../assets/img.png"
import AOS from 'aos';
 import 'aos/dist/aos.css';


const Contact = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease-in-out',
      once:false
    })
  })
  return (
    <React.Fragment>
    <div id='contact'>
    <picture>
      <source media='(max-width:700px)' srcSet={sg}></source>
      <source media='(max-width:1000px)' srcSet={svd}></source>
      <img id='change' src={svd} alt='huh'/>

    </picture>
    <form className="form" data-aos="zoom-out">
    <h5 style={{textAlign:"center"}}>Contact Us</h5>
  <div className="flex">
    <label>
      <input required placeholder type="text" className="input" />
      <span>first name</span>
    </label>
    <label>
      <input required placeholder type="text" className="input" />
      <span>last name</span>
    </label>
  </div>  
  <label>
    <input required placeholder type="email" className="input" />
    <span>email</span>
  </label> 
  <label>
    <input required type="tel" placeholder className="input" />
    <span>contact number</span>
  </label>
  <label>
    <textarea required rows={3} placeholder className="input01" defaultValue={""} />
    <span>message</span>
  </label>
  <button className="fancy" href="#">
    <span className="top-key" />
    <span className="text">submit</span>
    <span className="bottom-key-1" />
    <span className="bottom-key-2" />
  </button>
</form>

    </div>
<Footer/>
    </React.Fragment>
    
  )
}

export default Contact
