import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { FaSearch, FaHome, FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './store.css'

export const Store = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/cart';
        navigate(path)
    }

    return (
        <>
            <div className='screen'>
                <p>Screen Size Not Supported <br /> Please Screen width under 390px to 425px</p>
            </div>
            <div className='store-main'>
                <div className='store-header'>
                    <div className='store-heading'>
                        <h1>SAYLANI WELFARE</h1>
                        <p>DISCOUNT STORE</p>
                    </div>
                    <div className='cart-box'>
                        <BsCart4 onClick={routeChange} className='cart-icon' />
                    </div>
                </div>
                <div className='banner-image-main'>
                    <div className='banner-image'>
                        <img src='https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=170667a&w=0&k=20&c=Io1j3y2_z7cmSb0MSX_adf-t26rPbjSqwuIbj7ukCbQ=' alt='BannerImage' />
                    </div>
                </div>
                <div className='search-box-main'>
                    <div className='search-box'>
                        <FaSearch className='search-icon' /><input type='text' placeholder='Search by product name' />
                    </div>
                </div>
                <div className='categery-box-main'>
                    <div className='heading-box'>
                        <h2>Shop by Categery</h2>
                    </div>
                    <div className='categery-image-box'>
                        <img src='https://ibexmag.com/wp-content/uploads/2012/06/grocery-pakistan.jpg' alt='image1' />
                        <img src='https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg' alt='image2' />
                        <img src='https://fyi.extension.wisc.edu/safefood/files/2019/04/CDC_produce-300x201.png' alt='image3' />
                    </div>
                </div>
                <div className='product-card-main'>
                    <div className='card'>
                        <img src='https://www.provisioneronline.com/ext/resources/images/Responsive-Default-Images/meat-science-review.jpg?1607975249' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Meat</h4>
                                <h4>Rs.800 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://img.freepik.com/premium-photo/raw-fish-fillet-tilapia-cutting-board-with-lemon-spices-dark-table_78677-2408.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Fish</h4>
                                <h4>Rs.450 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://cdn.shopify.com/s/files/1/0268/1477/5381/products/9215_25397_z_222113da-221c-42b7-811b-175fae70003c_1024x1024@2x.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Beef Qeema</h4>
                                <h4>Rs.800 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://pictures.grocerapps.com/original/grocerapp-onion--627cdb56a30aa.jpeg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Onion</h4>
                                <h4>Rs.200 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Patato</h4>
                                <h4>Rs.150 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Tomato</h4>
                                <h4>Rs.250 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://subzi.pk/wp-content/uploads/2018/10/9a2f4244b474aa18b170540c11c02144.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Ginger</h4>
                                <h4>Rs.450 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src='https://www.cartpk.com/media/catalog/product/cache/ccf016c098f64509830f131aff46d4ef/g/a/garlic-07.jpg' alt='meat' />
                        <div className='card-detail'>
                            <div className='card-title'>
                                <h4>Bringal</h4>
                                <h4>Rs.750 - per kg</h4>
                            </div>
                            <div className='card-dis'>
                                <p>This is product description <br /> This is abc product description</p>
                                <button className='plus-btn'>+</button>
                            </div>
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
