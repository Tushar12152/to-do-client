import {  createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";





export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const googleProvider=new GoogleAuthProvider
    const githubProvider=new GithubAuthProvider()

    const createUser=(email,password)=>{
         setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn=(email,password)=>{
        setLoading(true)
           return signInWithEmailAndPassword(auth,email,password)
    }

    const googlepopUp=()=>{
        setLoading(true)
         return signInWithPopup(auth,googleProvider)
    }

    const githubPopUp=()=>{
         setLoading(true)
         return signInWithPopup(auth,githubProvider)
    }


const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}


    useEffect(()=>{
           const unsubscribe=onAuthStateChanged(auth,currentUser=>{
               setUser(currentUser)
               setLoading(false)
           })

           return ()=>{
               return unsubscribe()
           }
    },[])



    const authInfo={
        loading,
        user,
        createUser,
        SignIn,
        googlepopUp,
        logOut,
        githubPopUp,


    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};



AuthProvider.propTypes={
     children:PropTypes.node,
}

export default AuthProvider;