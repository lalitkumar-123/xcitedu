import React , {useState} from 'react'
import {FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from "axios"
import '../Css/Signincard.css'

export default function Signincard() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [error,setError] = useState("");

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
            <input className="input-tag-parent" value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Name" required/>
            <input className="input-tag-children" value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" required/>
            <input className="input-tag-children" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required/>
            <Link to="/Logincard">Already have an account?</Link>
            <button className="button-tag"  onClick={(e) => signup(e)}>Sign Up</button>
          </form>  
          </Card>   
          </div>
        </>
    )
}
