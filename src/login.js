import React from 'react'
import './login.css';
import { useDispatch, useSelector } from "react-redux";
import { Link , NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export default function Login() {
  const userDetails = useSelector(state => state.rootReducer);
  console.log(userDetails);
  const Navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username === userDetails.signup.userDetails[0].username && password === userDetails.signup.userDetails[0].password){
      console.log('success');
      Navigate('/home')
    }
    else{
      console.log('fail');
    }
  }
  return (
    <div className="login-page">
    <div className="form">
      <div className="login">
        <div className="login-header">
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login.</p>
        </div>
      </div>
      <form className="login-form">
        <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>login</button>
        <p className="message">Not registered? 
        <NavLink to="/signup" as="p" >
         Create an account
         </NavLink>

        </p>
      </form>
    </div>
  </div>
  )
}
