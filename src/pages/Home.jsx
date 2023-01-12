import './LoginSignup.scss';
import './Home.scss';
import React, {  useState } from 'react'
import { createSearchParams,  useNavigate } from 'react-router-dom'
import axios from 'axios';
import Nav from '../components/Nav';

const Home = () => {
    const [unit, setUnit] = useState(0)
    const [amount] = useState(500)
    // const [total, setTotal] = useState(0)
    const [name] = useState(JSON.parse(localStorage.getItem('nupatInvestor')).data.fullName)
    const navigate = useNavigate();
    const cat = unit* amount
        let comma = new Intl.NumberFormat('en-US', {});
   
    const buy = async () => { 
      const response = await axios.post(`https://nupat-lms.alimisamuel.com/api/v1/share/create-share/${JSON.parse(localStorage.getItem('nupatInvestor')).data.id}`, {
        name: name,
        unit: unit ,
        total: comma.format(cat),
 
      }
    )
    if(response.status === 201){
      navigate({
            pathname: '/payment',
            search: createSearchParams({
                amountOfUnit: unit,
                amountPerUnit: amount,
                totalamount: comma.format(cat)
            }).toString()
        })

    }

       
    }
    
  return (
    <div>
        <div className='home-body'>
      <div className="home-container">
        <Nav/>
<div className="b-box">
     <div className="box">
      <div className="products">
          Unit available
        </div>
        <div className="product">
          1000 units
        </div>
       
       
      </div>
  {/* </div> */}
  <div className="content">
  <div className="content-div">
  <div className='content-label'>unit</div>
      <div className="inpit-icon">
      <input className='content-input'
                    name="discount1" 
                    // value={unit}
                    type="number"
                 onChange={(e)=> setUnit(e.target.value)}
                    // placeholder='0.00000000'
                     />
                    {/* <div className="icon">
                      %
                    </div> */}
      </div>
    </div>
    <div className="content-div">
      <div className='content-label'>price</div>
      <div className="inpit-icon">
      <input className='content-input'
                    name="price" 
                    value={`${amount} per unit`} 
                    readOnly={amount}
                    //  placeholder='0.00000000'
                      />
                     <div className="icon">&#x20A6;</div>
      </div>
    </div>
    {/* <div className="calculate"   >Calculate</div> */}
    <div className="content-div">
    <div className='content-label'>Total</div>
    <div className="inpit-icon">
      <input className='content-input'
                    name="price" 
                    value={comma.format(cat)} 
                    readOnly={comma.format(cat)}
                    //  placeholder='0.00000000'
                      />
                     <div className="icon">&#x20A6;</div>
      </div>
      {/* <div className='content-total'> </div> */}
      
    </div>
     <div className="buy-total" onClick={buy}>
      Buy
    </div>
  </div>
</div>
      </div>
</div>
    </div>
  )
}

export default Home

