import React from 'react';
import '../Css/Footer.css'
import {FaGithub, FaTwitter, FaYoutube, FaLinkedin, FaInstagram} from 'react-icons/fa';

function FooterLanding(props){
   return ( 
      <div class="outer-footer">
         <div class={`footer ${props.bgColor}`}>
            <div class="grid-container">
               <div class="wanna-talk-to-us"><h1>Contact us?</h1></div>
                  <div class="write-to-us">
                     <form id="contact-us">
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <textarea type="text" id="message" name="messsage" placeholder="Start typing!"></textarea>
                        <div className="send-btn-container"><input type="submit" value="Send" className="send"></input></div>
                     </form>
                  </div>
                  <div class="links">
                        <ul class="footer-links flex-container">
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaLinkedin/></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaYoutube/></i></a></li>
                           <li><a href="#"  target="_blank" rel="noopener noreferrer"><i><FaGithub/></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaTwitter/></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaInstagram/></i></a></li>
                        </ul>
                  </div>
                  <div class="footer-info">
                     <div class="desc">
                        <p class = "contact strong">Boared with expensive offline learning! Get guided by <br/>
                        our one-to-one learning platform.</p>
                        <div class="description1">
                           <p class = "contact strong"></p>
                           <br></br>
                           <p>Dwarka</p>
                           <p>New Delhi</p>
                           <p>110078</p>
                           <p>Email: contact@xcitedu.com</p>
                           <p>Phone: +91 8527985605</p>
                           <br></br>
                           </div>
                        <div>
                           {/* <div class="description3">
                              <p class = "guideline strong">General Guidelines</p>
                              <p class = "contact strong"></p>
                              <br></br>
                              <p>Code of Conduct</p>    
                              <br></br>        
                              <br></br>        
                           </div>
                           <div class="description2">
                              <p class = "community strong">Community</p>
                              <br></br>
                              <p>GFG KIIT</p>
                              <br></br>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>   
         </div>
      </div>

   )
}

export default FooterLanding