import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './LoginSignup.scss';
import { createSearchParams, useNavigate } from 'react-router-dom';
import run from './img/illustration_login.png'
import Spinner from '../components/Spinner';



const LoginSignup = () => {
  const [signUp, setSignUp] = useState(true)
  const [isView, setIsView] = useState(true)
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [upEmail, setupEmail] = useState('')
const [upPassword, setupPassword] = useState('')
const [phone, setphone] = useState('')
const [name, setname] = useState('')
const [responseSpin, setResponseSpin] = useState(false)

  // const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()

  

  useEffect(()=>{
const auth = localStorage.getItem('nupatInvestor');
if(auth){
  navigate('./dashboard');
}
  })
  // const handleClick = event => {
  //   // 👇️ toggle isActive state variable
  //   setIsActive(current => !current);
  // };
  const handleLogin = async () => {
    setResponseSpin(true)
    const response = await axios.post('https://nupat-lms.alimisamuel.com/api/v1/auth/login', {
	email: email,
	password:password,
})

// console.log(response);

if(response.status === 201 ){
  localStorage.setItem('nupatInvestor', JSON.stringify(response.data))
  
  navigate({
    pathname: '/dashboard',
    search: createSearchParams({
       24746342: response.data.data.id
    }).toString()
})
  // navigate('./profile');
}else{
  console.log("bad")

}
  };
  const handleSignup = async () => {
    const response = await axios.post('https://nupat-lms.alimisamuel.com/api/v1/user/register', {
  email: upEmail,
	password:upPassword,
  phoneNo:phone,
  fullName:name,
})
// console.log(response.status);
if(response.status === 201 ){
  localStorage.setItem('nupatInvestor', JSON.stringify(response))
  navigate('./profile');
}else{
}
  };
  const handleNewSignup = event => {
    // 👇️ toggle isActive state variable
    setSignUp(!signUp);
  };

  const viewPassword = () => {
    setIsView(!isView)
  }
  
  return (
    <div className="body">
     { responseSpin ? <Spinner /> : <>
     <div className="" style={{ width:"100vw"}}>
        <div className="logo"></div>
      </div>
      <div className="sec-auth">
        <div className="log-side ">
          <div className="log-head green">Hi, Welcome Back</div>
          <img src={run} alt="" className="img" />
        </div>
    <div
    // className='sec-login-box'
    className={signUp ? 'sec-login-box' : 'none'}
     >
       <div className="sec-login">
       <div className='green sign-head'>Sign In To Nupat Investment Portal</div>
        <label className="label">
          {/* <span className="span">Email</span> */}
          <input className="input " type="email" 
          onChange={(e)=> setEmail(e.target.value)} 
          value={email}
          placeholder="Email address"/>
        </label>
        <label className="label">
          {/* <span className="span">Password</span> */}
          <div className="input-view" style={{display:"flex",alignItems:"center"}}>
          <input className="input" type={ isView ? 'password' : 'text'} 
          onChange={(e)=> setPassword(e.target.value)} 
          value={password}
          placeholder="Password"/>
           <i class={ isView ? 'fa fa-eye-slash' : 'fa fa-eye'} onClick={viewPassword} ></i>
           {/* <i class="fa fa-eye-slash"></i> */}
          </div>
        </label>
        <p className="forgot-pass">Forgot password?</p>
        {/* <Link  to='/profile'> */}
          <button type="button" className="submit" onClick={handleLogin}>Sign In</button>
          {/* </Link> */}
          <div className="span" onClick={handleNewSignup}>
          Don’t have an account? <span>Get started</span>
          </div>
       </div>
      </div>
      <div 
      className={signUp ? 'none' : 'sec-login-box'}
      // className="sec-signup"
      >
        <div className="sec-login signup">
            <div className='green sign-head'>Sign Up To Nupat Investment Portal,</div>
          <label className="label">
            <span className="span">Full Name</span>
            <input className="input" type="text" onChange={(e)=> setname(e.target.value)} 
          value={name} />
          </label>
          <label className="label">
            <span className="span">Email</span>
            <input className="input" type="email" onChange={(e)=> setupEmail(e.target.value)} 
          value={upEmail}/>
          </label>
          <label className="label">
          <span className="span">Phone No</span>
          <input className="input" type="number" onChange={(e)=> setphone(e.target.value)} 
          value={phone}/>
        </label>
          <label className="label">
            <span className="span">Password</span>
            <input className="input" type="password" onChange={(e)=> setupPassword(e.target.value)} 
          value={upPassword}/>
          </label>
          <button type="button" className="submit" onClick={handleSignup}>Sign Up</button>
          <div className="span" onClick={handleNewSignup}>
           Already have an account?<span> Sign-In </span>
          </div>
        </div>
        </div>
        
    </div>
     </> }
    </div>
  )
}

export default LoginSignup