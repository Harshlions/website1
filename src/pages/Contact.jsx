import React from 'react';
import './Contact.css';

function Contact() {
    return (
       <>
       <div className="contact"> 
       <div className="boxess">

<div id="box41">
        <img src="/img/icons/blueprint.png" alt="" height="100" width="100"/>
          <h1>30</h1>
           <br />
          <h3>Years In Business</h3>
       </div>

     

     <div id="box31">
        <img src="/img/icons/trophy.png" alt="" height="100" width="100"/>
          <h1>37</h1>
           <br />
          <h3>Awards Won</h3>
       </div>

     <div id="box21">
       <img src="/img/icons/notes.png" alt="" height="100" width="100"/>
          <h1>123</h1>
           <br />
          <h3>Projects Completed</h3>
      </div>
       
       
      <div id="box11">
         <img src="/img/icons/handshake.png" alt="" height="100" width="100"/>
          <h1>84</h1>
           <br />
        <h3>Happy Clients</h3>
      </div>
       </div>
       <div className="writing">
        <h1>30 Years <br /><br /> Experience</h1>
        <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
       <div className="btn">
         Contact Us
       </div>
       </div>
       </div>
       </>
    );
}

export default Contact;