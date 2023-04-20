import React, { useContext, useRef } from 'react'
import "./login.styles.css";
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user.context';


const Login = () => {
  const logname = useRef();
  const logemail = useRef();
  const {setcurrentUser} = useContext(UserContext);

  const handleinputs=(name,email)=>{
    setcurrentUser([name.current.value,email.current.value]);
    console.log(name.current.value);
    console.log(email.current.value);
  }
  return (
    <div className='login_container'>
        <div className="loginbox">
            <input type="text" ref={logname} placeholder='name'/>
            <input type="email" ref={logemail} placeholder='email'/>
            <Link to='/itemsdashboard'><button onClick={()=>{handleinputs(logname,logemail)}}>Explore</button></Link>
        </div>
    </div>
  )
} 

export default Login