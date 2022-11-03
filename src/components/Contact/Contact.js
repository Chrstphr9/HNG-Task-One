import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className='container'>
        <div className='Titile'>Contact Me</div>
        <form action="#">
            <div className='"user-details'>
                <div className='input-box'>
                    <span className='details'>First Name</span>
                    <input type="text" placeholder='Enter Your First Name' required/>
                </div>
                <div className='input-box'>
                    <span className='details'>Last Name</span>
                    <input type="text" placeholder='Enter Your Last Name' required/>
                </div>
                <div className='input-box'>
                    <span className='details'>Email</span>
                    <input type="text" placeholder='yourname@email' required/>
                </div>
                <div className='input-box'>
                    <span className='details'>Messgae</span>
                    <input type="text" placeholder="Send me a message and I'll reply you as soon as possible" required/>
                </div>
            </div>
            <div id='box'>
                <input type= "checkbox" />
                You agree to provide your data 
            </div>
            <div className='button'>
               <input type="submit" value="Submit"/> 
            </div>
        </form>
        </div>
  )
}

export default Contact