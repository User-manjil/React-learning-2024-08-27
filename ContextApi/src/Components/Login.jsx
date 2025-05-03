import { useContext } from 'react';
import React, { useState } from 'react'
import userContext from '../Context/userContext';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword]= useState('')
    const {setUser}= useContext(userContext);
    const submit=(e)=>{
        e.preventDefault()
        setUser({userName, password})

    }

  return (
    <div>
     <h1>Login</h1>

        <input type="text" onChange={(e) =>setUserName(e.target.value)}  placeholder='Username here' /> {"  "}
        <input type="password" onChange={(e) =>setPassword(e.target.value)} placeholder="Password here"  />
        <button onClick={submit} >Send</button>


    </div>
  )
}

export default Login
