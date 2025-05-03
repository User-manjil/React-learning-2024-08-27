import React, { useContext, useState } from 'react'
import userContext from '../Context/userContext'



const Profile = () => {
    const {user}= useContext(userContext);
 
   if (!user) return<div> Please Login</div>

    return <div>Welcome {user}</div>

  
    
  
 
 
}

export default Profile
