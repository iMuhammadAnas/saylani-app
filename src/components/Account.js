import React from 'react'
import { FaHome, FaShoppingCart, FaUserAlt, FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './account.css'

export const Account = () => {

  const name = localStorage.getItem('UserName')
  const phone = localStorage.getItem('Phone')

  return (
    <>
      <div className='screen'>
        <p>Screen Size Not Supported <br /> Please Screen width under 390px to 425px</p>
      </div>
      <div className='account-main'>
        <div className='profile-info'>
          <h1>Setting</h1>
          <img width='100px' src='https://i.pinimg.com/236x/2b/93/d8/2b93d8b64d3350b1151ac2ef05e89702.jpg' alt='profile' />
          <div className='profile-name-box'>
            <div className='profile-name'>
              <input type='text' placeholder={name} />
              <FaCheckCircle className='tik-icon' />
            </div>
          </div>
        </div>
        <div className='order-main'>
          <h2>Orders</h2>
          <div className='order-pending'>
            <div className='pending-left'>
              <h1>{name}</h1>
              <h4>Just Now - Pending</h4>
              <p>2 X ITEM NAME</p>
              <p>3 X ITEM NAME</p>
              <h3>Total</h3>
            </div>
            <div className='pending-right'>
              <p>{phone}</p>
              <h3 className='green'>RS.850</h3>
            </div>
          </div>
          <div className='order-pending'>
            <div className='pending-left'>
              <h1>{name}</h1>
              <h4>2 Feb 2023 - In Progress</h4>
              <p>2 X ITEM NAME</p>
              <p>3 X ITEM NAME</p>
              <h3>Total</h3>
            </div>
            <div className='pending-right'>
              <p>{phone}</p>
              <h3 className='green'>RS.350</h3>
            </div>
          </div>
          <div className='order-pending'>
            <div className='pending-left'>
              <h1>{name}</h1>
              <h4>1 Jan 2022 - Delevered</h4>
              <p>2 X ITEM NAME</p>
              <p>3 X ITEM NAME</p>
              <h3>Total</h3>
            </div>
            <div className='pending-right'>
              <p>{phone}</p>
              <h3 className='green'>RS.1150</h3>
            </div>
          </div>
          <div className='order-progress'></div>
          <div className='order-delevered'></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='bottom-navbar'>
          <Link className='home-link nav-links' to='/store'><FaHome className='nav-icons' /><br />Home</Link>
          <Link className='cart-link nav-links' to='/cart'><FaShoppingCart className='nav-icons' /><br />Cart</Link>
          <Link className='account-link nav-links' to='/account'><FaUserAlt className='nav-icons' /><br />Account</Link>
        </div>
      </div>
    </>

  )
}
