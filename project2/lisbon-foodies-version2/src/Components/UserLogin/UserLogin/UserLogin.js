
import { useContext } from 'react';
import { UserInfoContext } from '../../context/UserInfoContext';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

export default function UserLogin() {

  const navigate = useNavigate()

  const {userLogin, setUserLogin} = useContext(UserInfoContext)

const handleSubmit = (event) => {
  event.preventDefault()
  navigate("/")
}

const handleChange = (event) => {
  setUserLogin({ ...userLogin, [event.target.name]:event.target.value })
}

  return (
    <div>
        <h3>Login here:</h3>
       <form className='log-in-form' onSubmit={handleSubmit}>
          <label>
          <span>Username:</span>
          <div>
          <input 
            type='text'
            name="username"
            onChange={(event) => handleChange(event)}
            placeholder='Enter username'
          /> 
          </div>  
          </label>
          <label>
          <span>Password:</span>
          <div>
          <input 
            name="password"
            type='password' 
            onChange={(event) => handleChange(event)}
            placeholder='Enter password'
          />
          </div>
          </label>
          <button type="submit">Log in</button>
      </form>
    </div>
  );
}