import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/FirebaseConfig';
import axios from 'axios';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUSerProfile = (name,Photourl)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: Photourl
          })
    }
    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser)
           
              if(currentUser){
                  axios.post('https://b712-summer-camp-server-side-j-sense.vercel.app/jwt',{email : currentUser.email})
                  .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                    setLoading(false)
                  })

              }
              else{
                localStorage.removeItem('access-token')
              }
          })
          return ()=>{
              return unsubscribe;
          }
      },[])
    const authInfo ={ 
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUSerProfile,GoogleSignIn
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;