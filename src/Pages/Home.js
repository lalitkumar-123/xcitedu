import React, {useEffect} from 'react'
import Header from '../Navbar/Header'
import Footer from './Footer'
import Signin from './Signin'
import Signincard from './Signincard'


export default function Home() {

    let width = window.innerWidth;

    return (
        <>  
        {/* <Header/>
        <Footer/> */}
        {width >= 600 ? <Signin/> : <Signincard/>}    
        </>
    )
}
