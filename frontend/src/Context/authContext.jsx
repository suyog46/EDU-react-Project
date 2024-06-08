import React, { createContext, useEffect, useState } from 'react'

 export const AuthContext=createContext();

function authContext({children}) {

  const [auth, setAuth]=useState(false);
  const[imagepath,setImagepath]=useState('');

  useEffect(()=>{
    const savedauth=localStorage.getItem('auth');        //here we get the local storage
    savedauth?setAuth(true) :setAuth(false);
    savedauth?setImagepath(imagepath):setImagepath("null")
   },[]);

  
  const login=(Auth,imagepath)=>{
    console.log("value after function is hit",Auth);
        setAuth(Auth); 
        setImagepath(imagepath);     //lookout at these two  setauth and setimagepath again ...cause useEffect le nai kam gari sakyo ta
        localStorage.setItem("auth",Auth);               //here we set the local storage
        localStorage.setItem("path",imagepath)
  }


  const logout=()=>{
    setAuth(false);
    console.log("logged out");
    localStorage.removeItem("auth");

  }
  const context={auth,login,logout,imagepath}
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export default authContext;