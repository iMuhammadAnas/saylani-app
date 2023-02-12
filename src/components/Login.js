import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'
import { Link } from 'react-router-dom'
import { IoMailOpenOutline } from 'react-icons/io5'
import { BsEyeSlash } from 'react-icons/bs'


const auth = getAuth(app);


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password).then(value => console.log('Signin Success')).catch(err => console.log(err));
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
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
                        <IoMailOpenOutline className='input-icon' />
                    </div>
                    <div className='input-box'>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
                        <BsEyeSlash className='input-icon pass' />
                    </div>
                </div>
                <div className='sign-up-btn-box'>
                    <Link className='sign-up-btn' onClick={signInUser} to='/login'>Log In </Link>
                </div>
                <div className='already-btn-box'>
                    <Link className='already-btn' to='/signup'>Don't have an account? Register</Link>
                </div>
            </div>
        </>

    )
}
