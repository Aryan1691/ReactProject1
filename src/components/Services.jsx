import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import IMG2 from '../assets/image12.png';
import IMG3 from '../assets/image13.png';
import IMG4 from '../assets/image14.png';
import IMG5 from '../assets/image15.png';
import IMG6 from '../assets/image16.png';


const Services = () => {
  return (
    <div className='services'>
      <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      interval={1000}
      >

<div >
  <img src={IMG2} alt="Item1"></img>
  <p className='legend' style={{fontSize:"50px",backgroundColor:"blue",color:"white",border:"3px solid black"}}>Services we offer</p>
</div>
<div>
  <img src={IMG3} alt="Item1"></img>
  <p className='legend' style={{fontSize:"50px",backgroundColor:"pink",color:"black",border:"1px solid"}}>responsive web design</p>
</div>
<div>
  <img src={IMG4} alt="Item1"></img>
  <p className='legend' style={{fontSize:"50px",backgroundColor:"Red",color:"white",border:"1px solid black"}}> Android and IOS Application</p>
</div>
<div>
  <img src={IMG5} alt="Item1"></img>
  <p className='legend' style={{fontSize:"50px",backgroundColor:"rgb(23, 233, 241)",color:"black",border:"1px solid"}}>Domain at a reasonable Prices</p>
</div>
<div>
  <img src={IMG6} alt="Item1"></img>
  <p className='legend' style={{fontSize:"50px",backgroundColor:"blue",color:"white",border:"1px solid"}}>Masterpiece UI/UX design</p>
</div>
      </Carousel>
    </div>
  )
}

export default Services;
