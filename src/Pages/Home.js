import React, {useEffect} from 'react'
import Header from '../Navbar/Header'
import Footer from './Footer'
import Signin from './Signin'
import Cardcomponent from './Cardcomponent'
import Signincard from './Signincard'
import Testimonial from "../Testimonials/Testimonial";
import Test from './Test'

export default function Home() {

    let width = window.innerWidth;

    return (
        <> 
        {/* {width > 600 ? <Signin/> : <Signincard/>} */}
           
        <Test/> 
         {/* <Cardcomponent/> */}
        <Testimonial/>
       
        </> 
    )
}

{/* {width >= 600 ? <Signin/> : <Signincard/>} */}
