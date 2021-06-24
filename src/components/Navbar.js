import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const { handleLogout, user } = props;

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    //Don't permit the button appear when reload the page
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            {user ? (
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            my anime list
                            <i class="fas fa-stream"></i>

                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/anime-search'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    animes
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/sign-up'
                                    className='nav-links-mobile'
                                    onClick={closeMobileMenu}
                                >
                                    sign up
                                </Link>
                            </li>
                        </ul>
                        {button && <Button
                            buttonStyle='btn--outline'
                            onClick={handleLogout}
                        >log out</Button>}
                    </div>
                </nav>

            ) : (
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            my anime list
                            <i class="fas fa-stream"></i>

                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    home
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='/anime-search'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    animes
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/sign-up'
                                    className='nav-links-mobile'
                                    onClick={closeMobileMenu}
                                >
                                    sign up
                                </Link>
                            </li>
                        </ul>
                        {button && <Link to='/sign-up' className='btn-mobile'>
                            <Button
                                buttonStyle='btn--outline'
                            >sign up</Button>
                        </Link>}
                    </div >
                </nav >

            )
            }

        </>
    );
}

export default Navbar;