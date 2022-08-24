import React from 'react'
import './login.css';
import SignupUser from './Redux/Actions/signupActions';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Link , NavLink } from "react-router-dom";




export default function Signup() {

    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const [name , setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
                     
    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(SignupUser({name,username,password}))
        Navigate('/')
    }
  return (
    <div className="login-page">
    <div className="form">
      <div className="login">
        <div className="login-header">
          <h3>SIGNUP</h3>
          <p>Please enter your credentials to signup.</p>
        </div>
      </div>
      <form className="login-form" onSubmit={(e)=>handleSubmit(e)} method='post'>
      <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>signup</button>
        <p className="message">Already registered? <a href="/">Please Login</a></p>
      </form>
    </div>
  </div>
  )
}
