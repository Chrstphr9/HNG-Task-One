import React from 'react'
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
  <div id="body">
      <div className='contact_container'>
        <div className='title'>Contact Me</div>
        <form action="#">
            <div className='user-details'>
                <div id="first_name">
                    <span className='details'>First Name</span>
                    <input type="text" placeholder='Enter Your First Name' required/>
                </div>
                <div id="last_name">
                    <span className='details'>Last Name</span>
                    <input type="text" placeholder='Enter Your Last Name' required/>
                </div>
                <div id='email'>
                    <span className='details'>Email</span>
                    <input type="text" placeholder='yourname@email' required/>
                </div>
                <div id='message'>
                    <span className='details'>Messgae</span>
                    <input type="text" placeholder="Send me a message and I'll reply you as soon as possible" required/>
                </div>
                
            </div>
            <div id='box'>
                <input type= "checkbox" />
                You agree to provide your data 
            </div>
            <div id="btn__submit">
               <input type="submit" value="Submit"/> 
            </div>
        </form>
        </div>
  </div>
  )
}

export default Contact