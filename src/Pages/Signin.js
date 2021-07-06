import React from 'react'
import '../Css/Signin.css'
import {FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa';

export default function Signin() 
{

  function signupfunc(e)
  {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  }

  function signinfunc(e)
  {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  }
     return (
      <>
        <div className="container" id="container" style={{width: window.innerWidth-300}}>
        <div className="form-container sign-up-container">
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
            <button className="button-tag"  onClick={(e) => e.preventDefault()}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social"><i><FaLinkedin/></i></a>
              <a href="#" className="social"><i><FaGoogle/></i></a>
              <a href="#" className="social"><i><FaInstagram/></i></a>
            </div>
            <span>or use your account</span>
            <br/>
            <input className="input-tag-parent" type="email" placeholder="Email" />
            <input className="input-tag-children" type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="button-tag-secondary" onClick={(e) => e.preventDefault()}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info</p>
              <button className="ghost" style={{borderRadius:"30px"}}  onClick={(e) => signinfunc(e)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friends!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" style={{borderRadius:"30px"}}  onClick={(e) => signupfunc(e)}>Sign Up</button>
            </div>
          </div>
        </div>
        </div>
      </>
    )
}