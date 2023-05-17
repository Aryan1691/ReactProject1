import React,{useEffect} from 'react';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import web from "../assets/image3.webp"
const Home2 = () => {
  useEffect(()=>{
AOS.init({
  duration:1000,
  easing:'ease-in-out',
  once:false
})
return()=>{
  AOS.refresh();
}
  },[])
  return (
    <React.Fragment>
        <div className='home' id='Home' data-aos="zoom-out">
            <main>
            <h1>TechWorld</h1>
            <p>Solution to all Your Problems</p>
            </main>
        </div>
        <div className='home2' style={{zIndex:1}}>
            <img src={web} alt="Graphics" data-aos="fade-up"/>
            <div>
          <p data-aos="fade-bottom">
            We are your one and only solution to the 
            tech problems you face
            every day. 
            We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
        </div>
        <div id='about'></div>
        <div className='home3' data-aos="fade-up" >
            <div>
                <h1>
                    Who we are?
                </h1>
                <p>
                The company itself is a very successful company.
                Who should be favored by flattering offices here and there, or
                to be chosen with great hatred? All who run away from the duties 
                of our sorrows are bound by mere hatred. 
                It is a pain to be repelled by the services of these pains.
                Let him seek the pain of those who forsake any of those who praise because of the time.
                There is never one who is most worthy to follow, the pleasure or the refusal of this one
                who, as it were, benefits, and the pains themselves are harsher in time? Let the pains
                be relieved, let me open to the trouble, let him avoid any office with a corrupt hatred, and receive him when or no one. Let him seek the reason at which time 
                he flees! The easy happiness hinders and the like are most present whence the pleasures 
                themselves are necessary,
                and will never happen by rejecting them?
                Something that no one knows pleases 
                those who are driven away by flight, not born, by right from 
                duties the thing itself with the pleasure of the body, which some of us often
                </p>
            </div>
        </div>
       
     
     <div id='brands'></div>
        <div className='home4' data-aos="fade-up">
          <div>
            <h1>
              Brands
            </h1>
            <article>
              <div>
                <AiFillGoogleCircle/>
                <p>Google</p>
              </div>
              
              <div>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
              </div>

              <div>
                <AiFillYoutube/>
                <p>Youtube</p>
              </div>

              <div >
                <AiFillInstagram/>
                <p>Instagram</p>
              </div>
            </article>
          </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default Home2;
