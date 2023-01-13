import React from 'react'
import Nav from '../components/Nav'
import './dashboard.css'
import twitter from './img/twitter-icon.svg'
import insta from './img/Insta-icon.svg'
import Linkedin from './img/Linkedin-icon.svg'

const Dashboard = () => {
  return (
    <div className="profile">
        <Nav/>
        <div className="profiles">
          <div className="">
          <div className="section-1">
     <div className="details">
         <div className="info">Username</div>
         <div className="info-d">{JSON.parse(localStorage.getItem('nupatInvestor')).data.fullName || JSON.parse(localStorage.getItem('nupatInvestor')).data.data.fullName}</div>
     </div>
     <div className="details">
         <div className="info">Shares </div>
         <div className="info-d">0</div>
     </div>
     <div className="details">
         <div className="info">Payment Status</div>
         <div className="info-d">None</div>
     </div>
     <div className="details">
         <div className="info">User Id</div>
         <div className="info-d">875385</div>
     </div>
    
     </div>
     <div className="section-2">
        <div className="sec-part-1">
        <div className="list-head">Our Services</div>
            <div className="list">Nupat Code Camp <button>View</button> </div>
            <div className="list">Ulego <button>View</button></div>
            <div className="list">Selenia <button>View</button></div>
            <div className="list">Nupat Initiatives <button>View</button></div>
        </div>
        <div className="sec-part-2">
        <div className="list-head">Contact Us</div>
        <div className="contact">
            <div className="info-detail">Address: </div>
            <div className="detail-info">46 Community Rd, Akoka 100001, Lagos</div>
        </div>
        <div className="contact">
            <div className="info-detail">Phone No: </div>
            <div className="detail-info">0803 195 8586</div>
        </div>
        <div className="contact">
            <div className="info-detail">Email: </div>
            <div className="detail-info">ayotayo@gmailcom</div>
        </div>
        <div className="socials">
            {/* <img src={facebook} alt="" /> */}
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={Linkedin} alt="" />
        </div>
        </div>
     </div>
     </div>
        </div>
    </div>
   
  )
}

export default Dashboard