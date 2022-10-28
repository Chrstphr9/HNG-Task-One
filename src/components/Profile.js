import React from 'react';
import image1 from './asset/image1.jpeg'
import Button from 'react-bootstrap/Button';

const Profile = () => {
  return (

    <div>
        <img src={image1} id="profile_img" alt='la casa'/>
        <h1 id="header">Christopher Anigbo</h1>
       
        <div className='btn-cont'>
        <a href='https://twitter.com/Chrstphr_Wlkngs'>Twitter Link</a>
        <a href="https://training.zuri.team/">Zuri Team</a>
        <a href='http://books.zuri.team'id='books'>Zuri Books </a>
        <a href='https://books.zuri.team/' id="python_book">Python Books</a>
        <a href='https://background.zuri.team' id="pitch">Background Check for Coders</a>
        <a href='https://books.zuri.team/design-rules'id="design_book">Design Books </a>
         
    </div>
    

    </div>
    
  )
}

export default Profile