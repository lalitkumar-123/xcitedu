import React from 'react'
import {FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../Css/Signincard.css'

export default function Signincard() {
    return (
        <>
          <div className="form-container-signup">
          <Card className="card px-2 pt-2 pb-3">
          <form>
            <h1>Sign Up</h1>
            <div className="social-container">
              <a href="#" className="social"><i><FaLinkedin/></i></a>
              <a href="#" className="social"><i><FaGoogle/></i></a>
              <a href="#" className="social"><i><FaInstagram/></i></a>
            </div>
            <span>or use your email for registration</span> 
            <br/>
            <input className="input-tag-parent" type="text" placeholder="Name" />
            <input className="input-tag-children" type="email" placeholder="Email" />
            <input className="input-tag-children" type="password" placeholder="Password" />
            <Link to="/Logincard">Already have an account?</Link>
            <button className="button-tag"  onClick={(e) => e.preventDefault()}>Sign Up</button>
          </form>  
          </Card>   
          </div>
        </>
    )
}
