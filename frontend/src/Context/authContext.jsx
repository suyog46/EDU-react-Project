import React, { createContext, useEffect, useState } from 'react'

 export const AuthContext=createContext();

function authContext(props) {

  const [auth, setAuth]=useState(false);

  useEffect(()=>{
    const savedauth=localStorage.getItem('auth');
    savedauth?setAuth(true):setAuth(false);
  },[]);
  const login=(Auth)=>{
    console.log("value after function is hit",Auth);
        setAuth(Auth); 
        localStorage.setItem("auth",Auth);
  }
  const logout=()=>{
    setAuth(false);
    console.log("logged out");
    localStorage.removeItem("auth");

  }
  const context={auth,login,logout}
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default authContext;