import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const updateUserProfile = (user, username) => updateProfile(user, { displayName: username })

    const googleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const userData = result.user;
                setUser(userData)
            }).catch(error => setError(error.message))
    }

    const githubSignIn = () => {
        signInWithPopup(auth, GithubProvider)
            .then(result => {
                const userData = result.user;
                setUser(userData)
            }).catch(error => setError(error.message))
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    // observe user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
        });
        return () => {
            return unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        googleSignIn,
        githubSignIn,
        logOut,
        error,
        createUser,
        signInUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;