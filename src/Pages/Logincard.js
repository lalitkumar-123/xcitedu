import React , {useState} from 'react'
import {FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from "axios"
import '../Css/Signincard.css'

export default function Logincard() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [error,setError] = useState("");

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
          <div className="form-container-signup">
          <Card className="card px-2 pt-2 pb-3">
          <form>
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social"><i><FaLinkedin/></i></a>
              <a href="#" className="social"><i><FaGoogle/></i></a>
              <a href="#" className="social"><i><FaInstagram/></i></a>
            </div>
            <span>or use your account</span>
            <br/>
            <input className="input-tag-parent" value={username} onChange={(e) => {setUsername(e.target.value)}} type="email" placeholder="Username" required/>
            <input className="input-tag-children" value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required/>
            <a href="#">Forgot your password?</a>
            <Link to="/Signincard" className="mt-0">Need an account?</Link>
            <button className="button-tag-secondary" onClick={(e) => login(e)}>Sign In</button>
          </form>
          </Card>   
          </div>
        </>
    )
}
