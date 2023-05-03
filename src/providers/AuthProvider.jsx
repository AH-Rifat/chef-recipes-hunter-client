import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { Navigate, redirect } from 'react-router-dom';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState({})

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const userData = result.user;
                console.log(userData);
                setUser(userData)
            }).catch(error => console.log(error.message))
    }

    const githubSignIn = () => {
        signInWithPopup(auth, GithubProvider)
            .then(result => {
                const userData = result.user;
                console.log(userData);
                setUser(userData)
            }).catch(error => console.log(error.message))
    }

    const logOut = () => {
        return signOut(auth).then(() => <Navigate to={"/"}></Navigate>)
    }

    // observe user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            return unsubscribe
        }
    }, [])

    const userInfo = {
        user,
        googleSignIn,
        githubSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;