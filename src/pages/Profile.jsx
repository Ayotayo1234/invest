import React, { useState } from 'react'
import './profile.scss'
import Nav from '../components/Nav'
import img from './img/marie.jpg'

const Profile = () => {
    const [profPic, setProfPic] = useState(false)

    const handleProfPic = event => {
        setProfPic(!profPic)
      };

    const fullName = JSON.parse(localStorage.getItem('nupatInvestor')).data.fullName || JSON.parse(localStorage.getItem('nupatInvestor')).data.data.fullName
    
  return (
   <div className='profile-full' style={{height:"100vh"}}>
   
     <div className="profile">
        <Nav/>
        <div className="prof">
           <div className="first-prof">
           <div className='headings one'>EDIT INFORMATION</div>
            <div className="prof-img one">
                <img src={img} alt="" onClick={handleProfPic}/>
                <div className="upload">
                    <button>Choose a file</button>
                    <small>Acceptable formats .jpg .png only</small>
                </div>
            </div>
            <div className="account-info">
            <div className='headings'>ACCOUNT INFORMATION <img src={img} alt="" onClick={handleProfPic} /></div>
            <div className="info-input">
                <div className="input-section">
                    <label >Full Name</label>
                     <input className='' type="text" placeholder='first name' value={fullName} readonly />
                </div>
                <div className="input-section">
                    <label >Phone No</label>
                    <input className='' type="text" placeholder='phone no' value='08052327361' readonly />
                </div>
                <div className="input-section">
                    <label >E-mail</label>
                     <input className='' type="text" placeholder='Email' value='ayo@gmail.com' readonly />
                </div>
                <button>Save</button>
                <div className={profPic ? 'prof-view' : 'transform-scale'}>
                <div className="x"  onClick={handleProfPic}>+</div>
            <img src={img} alt=""  />
            </div> 

            </div>

            </div>
           </div>
           <div className="sec-prof">
           <div className="account-info">
            <div className='headings'>EDIT PASSWORD</div>
            <div className="info-input">
                <div className="input-section">
                    <label >Current Password</label>
                     <input className='' type="password" placeholder='Current Password'   />
                </div>
                <div className="input-section">
                    <label >New Password</label>
                    <input className='' type="password" placeholder='New Password' />
                </div>
                <div className="input-section">
                    <label >Confirm Password</label>
                     <input className='' type="password" placeholder='Confirm Password'  />
                </div>
                <button>Update Password</button>
            {/*
      
       */}

            </div>

            </div>
            
           </div>
        </div>
    </div>
   </div>
  )
}

export default Profile