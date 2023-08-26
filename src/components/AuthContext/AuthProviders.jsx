import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth();

const AuthProviders = (children) => {

    // ...........Email And Password sign up and sign in sysyem......................//
const creatEmailPassword = (email, password) => {
    createUserWithEmailAndPassword(auth,email,password)

}
    
    const authInfo = {
creatEmailPassword,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;