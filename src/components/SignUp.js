import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { TbPhoneCall } from 'react-icons/tb'
import { IoMailOpenOutline } from 'react-icons/io5'
import { BsEyeSlash } from 'react-icons/bs'
import './login.css'

const auth = getAuth(app)


export const SignUp = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const userName = displayName;
  const phone = phoneNumber;
  const userEmail = email;
  const userPassword = password;

  const setItemInLocalStorage = () => {
    localStorage.setItem('UserName', userName);
    localStorage.setItem('Phone', phone);
    localStorage.setItem('Email', userEmail);
    localStorage.setItem('Password', userPassword);
  }

  const createUser = () => {
    setItemInLocalStorage();
    createUserWithEmailAndPassword(auth, email, password, displayName, phoneNumber)
      .then(value => { navigate('/store') })
      .catch(err => alert(err));
  }



  return (
    <>
      <div className='screen'>
        <p>Screen Size Not Supported <br /> Please Screen width under 390px to 425px</p>
      </div>
      <div className='sign-up-main'>
        <div className='sign-up-heading'>
          <h1>SAYLANI WELFARE</h1>
          <p>ONLINE DISCOUNT STORE</p>
        </div>
        <div className='sign-up-box'>
          <div className='input-box'>
            <input onChange={e => setDisplayName(e.target.value)} value={displayName} type='text' placeholder='Full Name' />
            <FaUserCircle className='input-icon' />
          </div>
          <div className='input-box'>
            <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} type='number' placeholder='Contact' />
            <TbPhoneCall className='input-icon' />
          </div>
          <div className='input-box'>
            <input onChange={e => setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
            <IoMailOpenOutline className='input-icon' />
          </div>
          <div className='input-box'>
            <input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
            <BsEyeSlash className='input-icon pass' />
          </div>
        </div>
        <div className='sign-up-btn-box'>
          <Link className='sign-up-btn' to='/signup' onClick={createUser}>Sing Up</Link>
        </div>
        <div className='already-btn-box'>
          <Link className='already-btn' to='/login'>Already have an account? Login</Link>
        </div>
      </div>
    </>

  )
}
