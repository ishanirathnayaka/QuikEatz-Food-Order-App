import React, { useState } from 'react'; 
import logo from '../Assests/logo.png';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    const openSignupPopup = () => {
        setIsSignupOpen(true);
        setIsLoginOpen(false); // Close login if open
    };

    const openLoginPopup = () => {
        setIsLoginOpen(true);
        setIsSignupOpen(false); // Close signup if open
    };

    const closeSignupPopup = () => {
        setIsSignupOpen(false);
    };

    const closeLoginPopup = () => {
        setIsLoginOpen(false);
    };

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}> 
                <img src={logo} alt="Logo" />
                <div className='hiddenLinks'>
                    <Link to='/'> Home </Link>
                    <Link to='/about'> About </Link>  
                    <Link to='/contact'> Contact </Link>
                    <Link to='/menu'> Menu </Link>
                    <button onClick={openSignupPopup} className="signup-btn">Sign Up</button>
                    <button onClick={openLoginPopup} className="login-btn">Login</button>
                </div>
            </div>

            <div className='rightSide'>
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/contact'> Contact </Link>
                <Link to='/menu'> Menu </Link>
                <button onClick={openSignupPopup} className="signup-btn">Sign Up</button>
                <button onClick={openLoginPopup} className="login-btn">Login</button>
                <button onClick={toggleNavbar}> 
                    <ReorderIcon />
                </button>
            </div>

            {isSignupOpen && (
                <div className="modal-overlay" onClick={closeSignupPopup}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Sign Up</h2>
                        <form>
                            <label>
                                Username:
                                <input type="text" placeholder="Enter your username" />
                            </label>
                            <label>
                                Email:
                                <input type="email" placeholder="Enter your email" />
                            </label>
                            <label>
                                Password:
                                <input type="password" placeholder="Enter your password" />
                            </label>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={closeSignupPopup}>Close</button>
                            <p>
                                Already have an account?{' '}
                                <span 
                                    className="modal-link" 
                                    onClick={() => {
                                        closeSignupPopup();
                                        openLoginPopup();
                                    }}
                                >
                                    Login
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {isLoginOpen && (
                <div className="modal-overlay" onClick={closeLoginPopup}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Login</h2>
                        <form>
                            <label>
                                Email:
                                <input type="email" placeholder="Enter your email" />
                            </label>
                            <label>
                                Password:
                                <input type="password" placeholder="Enter your password" />
                            </label>
                            <button type="submit">Login</button>
                            <button type="button" onClick={closeLoginPopup}>Close</button>
                            <p>
                                Don't have an account?{' '}
                                <span 
                                    className="modal-link" 
                                    onClick={() => {
                                        closeLoginPopup();
                                        openSignupPopup();
                                    }}
                                >
                                    Sign Up
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;