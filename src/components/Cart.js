import React, { useState } from 'react'
import { ImBin } from 'react-icons/im'
import { FaHome, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { TbPhoneCall } from 'react-icons/tb'
import { IoMailOpenOutline } from 'react-icons/io5'
import { BsEyeSlash } from 'react-icons/bs'
import './store.css'

export const Cart = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <div className='screen'>
                <p>Screen Size Not Supported <br /> Please Screen width under 390px to 425px</p>
            </div>
            <div className='store-main'>
                <div className='profile-icon-box'>
                    <img width='50px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/768px-Avatar_icon_green.svg.png' alt='profile' />
                </div>
                <div className='store-header'>
                    <div className='store-heading cart-heading'>
                        <p>Shopping</p>
                        <h3>Cart</h3>
                    </div>
                    <div className='cart-box'>
                        <ImBin className='cart-icon' />
                    </div>
                </div>
                <div className='product-card-main'>
                    <div className='card'>
                        <img src='https://www.provisioneronline.com/ext/resources/images/Responsive-Default-Images/meat-science-review.jpg?1607975249' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h2>Meat</h2>
                                <button className='decrement' onClick={() => setCount((count) => count - 1)}>-</button>
                                <div className='in-de-value'>{count}</div>
                                <button className='increment' onClick={() => setCount((count) => count + 1)}>+</button>
                                <h3>Rs.800</h3>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://img.freepik.com/premium-photo/raw-fish-fillet-tilapia-cutting-board-with-lemon-spices-dark-table_78677-2408.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h2>Fish</h2>
                                <button className='decrement' onClick={() => setCount((count) => count - 1)}>-</button>
                                <div className='in-de-value'>{count}</div>
                                <button className='increment' onClick={() => setCount((count) => count + 1)}>+</button>
                                <h3>Rs.450</h3>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://pictures.grocerapps.com/original/grocerapp-onion--627cdb56a30aa.jpeg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h2>Onion</h2>
                                <button className='decrement' onClick={() => setCount((count) => count - 1)}>-</button>
                                <div className='in-de-value'>{count}</div>
                                <button className='increment' onClick={() => setCount((count) => count + 1)}>+</button>
                                <h3>Rs.200</h3>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h2>Patato</h2>
                                <button className='decrement' onClick={() => setCount((count) => count - 1)}>-</button>
                                <div className='in-de-value'>{count}</div>
                                <button className='increment' onClick={() => setCount((count) => count + 1)}>+</button>
                                <h3>Rs.150</h3>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://subzi.pk/wp-content/uploads/2018/10/9a2f4244b474aa18b170540c11c02144.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h2>Ginger</h2>
                                <button className='decrement' onClick={() => setCount((count) => count - 1)}>-</button>
                                <div className='in-de-value'>{count}</div>
                                <button className='increment' onClick={() => setCount((count) => count + 1)}>+</button>
                                <h3>Rs.450</h3>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://www.cartpk.com/media/catalog/product/cache/ccf016c098f64509830f131aff46d4ef/g/a/garlic-07.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h2>Bringal</h2>
                                <button className='decrement' onClick={() => setCount((count) => count - 1)}>-</button>
                                <div className='in-de-value'>{count}</div>
                                <button className='increment' onClick={() => setCount((count) => count + 1)}>+</button>
                                <h3>Rs.750</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shiping-box'>
                    <div className='shiping-heading'>
                        <h4>Total</h4>
                        <h4 className='green'>Rs.185</h4>
                    </div>
                    <div className='shiping-form'>
                        <div className='input-box'>
                            <input type='text' placeholder='Full Name' />
                            <FaUserCircle className='input-icon' />
                        </div>
                        <div className='input-box'>
                            <input type='email' placeholder='Email' />
                            <IoMailOpenOutline className='input-icon' />
                        </div>
                        <div className='input-box'>
                            <input type='number' placeholder='Contact' />
                            <TbPhoneCall className='input-icon' />
                        </div>

                        <div className='input-box'>
                            <input type='text' placeholder='Shipping Address' />
                            <BsEyeSlash className='input-icon pass' />
                        </div>
                    </div>
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
