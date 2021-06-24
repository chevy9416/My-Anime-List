import React, { useEffect, useState } from 'react';

import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import SignUp from './pages/SignUp';
import Home from './pages/Home';



function Auth() {


    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const firebase = useFirebaseApp();

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }



    const handleLogin = async () => {
        clearErrors();
        const userInfo = await firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:
                    // do nothing
                }
            });

        console.log(userInfo);

    };

    const handleSignup = async () => {
        clearErrors();
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                    default:
                    // do nothing
                }
            });

    };

    const handleLogout = () => {
        firebase.auth().signOut();
    };

    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };


    useEffect(() => {
        authListener();
    });

    return (
        <>

            {user ? (

                <Home
                    handleLogout={handleLogout}
                    user={user}
                />

            ) : (

                <SignUp
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}

                />

            )}

        </>
    )
}

export default Auth
