import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const userInfo ={
        name:""
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;