import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import img from '../pages/img/marie.jpg'
import './nav.css'


const Nav = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate()
  const handleclicked = event =>{
    const admin = JSON.parse(localStorage.getItem('nupatInvestor')).data.isAdmin;
    
      setIsAdmin(admin)
  }
    useEffect(() => {
      handleclicked()
    }, [])
    
    const handleUnactive = event => {
      setIsActive(!isActive);
    };
    const handleLogout = event =>{
      localStorage.removeItem('nupatInvestor')
  navigate('/');
  
    }


  return (
    <div className='navvv' >
      <div 
       className={ isActive ? 'ham' : " none"} 
       onClick={handleUnactive}>
      <svg viewBox="0 0 100 80" width="25" height="25">
  <rect width="90" height="7"></rect>
  <rect y="30" width="90" height="7"></rect>
  <rect y="60" width="90" height="7"></rect>
</svg>
      </div>
      
    <div 
    className={ isActive ? 'nav' : " nav-close"}  onClick={handleUnactive}
     >
      <div  className="close nav-logo-txt" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             <div className="logo" > </div><div className="title">NUPAT <br /> INVESTORS <br /> PORTAL</div></div>
             <div className="welcome">
              <img src={img} alt="" />
              <Link to='/profile'><div className="welcome-txt">welcome</div></Link>
             </div>
             <NavLink to='/dashboard'
            className='nav-link' 

             >Home</NavLink>
            <NavLink to='/profile'
            className='nav-link' 

             >Profile</NavLink>
             <NavLink to='/admin'
              className={isAdmin?'nav-link' : 'none'}
              >Dashboard</NavLink>
            <NavLink to='/home'
            className='nav-link'
            >Buy Shares</NavLink>
            <NavLink to='/'
             onClick={handleLogout}
             className='nav-link'
            >Logout</NavLink>
            
           
    </div>
    </div>
  )
}

export default Nav