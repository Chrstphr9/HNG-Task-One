import React from 'react';
import image1 from './asset/image1.jpeg'
import map from "./asset/map.jpg"
import { FaGithub, FaSlack, FaShare } from "react-icons/fa"
import { HiOutlineDotsCircleHorizontal} from "react-icons/hi"

const Profile = () => {
  return (

    <div>
        <img src={image1} id="profile_img" alt='la casa'/>
        <h1 id="header">Christopher Anigbo</h1>

        <div id="share">
          <FaShare/>
        </div>
        <div id="menu">
          < HiOutlineDotsCircleHorizontal size={30}/>
        </div>
       
        <div className='btn-cont'>
        <a href='https://twitter.com/Chrstphr_Wlkngs' id="twitter">Twitter Link</a>
        <a href="https://training.zuri.team/">Zuri Team</a>
        <a href='http://books.zuri.team'id='books'>Zuri Books </a>
        <a href='https://books.zuri.team/' id="python_book">Python Books</a>
        <a href='https://background.zuri.team' id="pitch">Background Check for Coders</a>
        <a href='https://books.zuri.team/design-rules'id="design_book">Design Books </a>
    </div>

    <div className='Logo'>
      <li id="github"> <FaGithub size={30}/> </li>
      <li id="slack"> <FaSlack size={30}/> </li>
    </div>

    <div className='footer'>
         <div id='left'>
        <a href='#'>Zuri.Internship</a>
        </div>

        <div id='center'>
        <a href='#'>HNG Internship 9 Frontend Task</a>
        </div>

        <div id='right'> 
        <img src={map} alt='any' id='logo-img' />
        <a href='#'>INGRESSIVE <br></br> FOR GOOD</a>
        </div>

    </div>
    
    </div>
    
  )
}

export default Profile