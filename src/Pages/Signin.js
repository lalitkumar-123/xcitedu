import React , {useRef, useState} from 'react'
import {Alert} from 'react-bootstrap';
import {FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa';
import axios from "axios"
import '../Css/Signin.css'

export default function Signin() 
{
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error,setError] = useState("");

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

  function signup(e)
  {
    e.preventDefault();
    console.log(username, email, password);
    let data = {
      username: username,
      email: email,
      password: password,
    }
    axios.post("http://localhost:5000/register", data)
    .then(response => {
      console.log("Signed In");
      setUsername("");
      setEmail("");
      setPassword("");
    })
    .catch(error => {
      console.log(error);
      setError(error);
    })
  }

  function login(e)
  {
    e.preventDefault();
    console.log(username, password);
    let data = {
      username: username,
      password: password,
    }
    axios.post("http://localhost:5000/login", data)
    .then(response => {
      console.log("Logged In");
      setUsername("");
      setPassword("");
    })
    .catch(error => {
      console.log(error);
      setError(error);
    })
  }

     return (
      <>
        <div className="container mt-5" id="container" style={{width: window.innerWidth-300}}>
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
            {error && <Alert variant="danger">{error}</Alert>}
            <input className="input-tag-parent" value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Username" required/>
            <input className="input-tag-children" value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" required/>
            <input className="input-tag-children" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required/>
            <button className="button-tag"  onClick={(e) => signup(e)}>Sign Up</button>
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
            {error && <Alert variant="danger">{error}</Alert>}
            <input className="input-tag-parent" value={username} onChange={(e) => {setUsername(e.target.value)}} type="email" placeholder="Username" required/>
            <input className="input-tag-children" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required/>
            <a href="#">Forgot your password?</a>
            <button className="button-tag-secondary" onClick={(e) => login(e)}>Sign In</button>
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