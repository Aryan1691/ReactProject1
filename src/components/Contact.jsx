import React from 'react'
import svd from "../assets/image5.png"
import Footer from './Footer'

const Contact = () => {
  return (
    <React.Fragment>
    <div id='contact'>
    <img id='change' src={svd} alt='huh'/>
    <form className="form">
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
