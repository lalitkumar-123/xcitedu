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
                        <div id="contact-us">
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <textarea type="text" id="message" name="messsage" placeholder="Start typing!" rows="2"></textarea>
                        <div className="send-btn-container"><input type="submit" value="Send" className="send"></input></div>
                        </div>
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
                        <p class = "contact strong">Boared with expensive offline learning! <br/> Get guided by
                        our one-to-one learning platform.</p>
                        <p class = "contact strong">About Us</p>
                        <p class = "contact-second strong">Announcements</p>
                        <p class = "contact-second strong">Services</p>
                        
                        <div>
                     </div>
                  </div>
               </div>
            </div>   
         </div>
      </div>

   )
}

export default FooterLanding
