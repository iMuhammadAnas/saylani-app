import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

export const Main = () => {
    return (
        <>
            <div className='screen'>
                <p>Screen Size Not Supported <br /> Please Screen width under 390px to 425px</p>
            </div>
            <div className='landing-main'>
                <div className='landing-box'>
                    <img src='https://play-lh.googleusercontent.com/dGp-bVuxKn-J-v744tzYnruh0bUdslcQJ43PPQEXxt4vjsHr3NPB_pxECO1mp57dWjY=w240-h480-rw' alt='Logo' />
                    <h1>SAYLANI WELFARE</h1>
                    <p>ONLINE DISCOUNT STORE</p>
                </div>
                <div className='landing-btn-box'>
                    <Link className='start-btn' to='signup'>Get Started</Link>
                </div>
            </div>
        </>

    )
}
