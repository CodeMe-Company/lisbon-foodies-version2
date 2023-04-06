import React from 'react'
import { useContext } from 'react'
import { UserInfoContext } from '../context/UserInfoContext';

// styles
import './UserInfo.css'

export default function UserInfo() {

    // some small help with the destructuring from chatGPT
const { userLogin } = useContext(UserInfoContext)

  return (
    <div>
        <h2>User information:</h2>
        <p>UserName: {userLogin.username}</p>
        <p>Password: {userLogin.password}</p>

    </div>
  );  
}
