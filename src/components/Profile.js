import React from 'react';
import image1 from './asset/image1.jpeg'
import Button from 'react-bootstrap/Button';

const Profile = () => {
  return (

    <div>
        <img src={image1} id="profile_img" alt='la casa'/>
        <h1 id="header">Christopher Anigbo</h1>
        <Button classname="w-100">Sign Up </Button>
    </div>
  )
}

export default Profile