import './App.css';
import Home from './pages/Home';
import {  Route, Routes } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup'
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';

function App() {
   
  return (
    <div className="App">
      <Routes>
           <Route path='/' element={<LoginSignup/>}/>
           <Route path='/home' element={<Home/>}/>
           {/* <Route path='/test' element={<Test/>}/> */}
           <Route path='/payment' element={<Payment/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/admin' element={<Admin/>}/>
           <Route path='/dashboard' element={<Dashboard/>}/>
           <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
