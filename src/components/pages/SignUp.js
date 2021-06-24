import React, { useState } from 'react';
import '../Auth.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';



function SignUp(props) {

    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <section className="login">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                my anime list
                <i class="fas fa-stream"></i>

            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <div className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label >Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">

                    {hasAccount ? (
                        <>

                            <Button
                                buttonStyle='btn--outline'
                                onClick={handleLogin}
                            >sign in</Button>
                            <p>Don't have an account?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </>
                    ) : (
                        <>

                            <Button
                                buttonStyle='btn--outline'
                                onClick={handleSignup}
                            >sign up</Button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span></p>
                        </>

                    )
                    }

                </div>
            </div>


        </section>
    )
}

export default SignUp
