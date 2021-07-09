import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import '../Css/Opensource.css'
import image0 from '../assets/images/telerobo.gif'
import image1 from '../assets/images/gif2.gif'
import image2 from '../assets/images/gig3.gif'
import image3 from '../assets/images/gif1.gif'
import { Link,BrowserRouter as Router } from 'react-router-dom';
const subjects=[{name:"Physics",color:"rgb(238, 73, 188)"},
{name:"Maths",color:"springgreen"},
{name:"Chemistry",color:"rgb(245, 144, 21)"},
{name:"Personality Development",color:"cyan"},{name:"Web Development",color:"yellow"},
{name:"Competitive Programming",color:"rgb(21, 195, 226)"},{name:"Vocabulary",color:"turquoise"},{name:"Operating System",color:"springgreen"},]


const OpenSource=()=>{

    return <>
    <div className="Carousel-container">
      <Carousel fade="true" variant="dark" >
        
    <Carousel.Item><img src={image1} height="390vh" width="100%"></img>
    <Carousel.Caption>
      <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </Carousel.Caption></Carousel.Item>
    <Carousel.Item><img src={image2} height="390vh" width="100%"></img>
    <Carousel.Caption>
    <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item><img src={image3} height="390vh" width="100%"></img>
    <Carousel.Caption>
    <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></Carousel.Caption></Carousel.Item>
    
    <Carousel.Item><img src={image0} height="390vh" width="100%"></img>
    <Carousel.Caption>
    <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></Carousel.Caption></Carousel.Item>
    </Carousel>
    </div>
   
    {/* <div className="second-div">
      <div>Left</div> */}
      <div className="subjects-div">
        <Router>
      {subjects.map((item)=>(
      <Link ><div className="subject" style={{backgroundColor:item.color}} >
       {item.name}
      </div></Link>))}
      </Router>
      </div>
      {/* <div>Left</div>
    </div> */}
    </>
}
export default OpenSource
