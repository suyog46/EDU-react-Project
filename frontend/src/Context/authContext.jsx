import React, { createContext, useEffect, useState } from 'react'

 export const AuthContext=createContext();

function authContext({children}) {

  const [auth, setAuth]=useState(false);
  const[imagepath,setImagepath]=useState('');
  const [loginfo,setLoginfo]=useState({
                                  name:"",
                                  usertype:"",
                                  email:"",
                                  uid:"",                            
  })
  useEffect(()=>{
    const savedauth=localStorage.getItem('auth');        //here we get the local storage
    const imagepath=localStorage.getItem('imagepath');
    const email=localStorage.getItem('email');
    const usertype=localStorage.getItem('usertype');
    const name=localStorage.getItem('name');
    const uid=localStorage.getItem('uid')
    if(savedauth){
      setAuth(true) 
      setImagepath(imagepath)
      setLoginfo({
        name:name,
        usertype:usertype,
        email:email,
        uid:uid,
      })
      

    }
    else{
      setAuth(false);
      setImagepath("null");
      
    }

   },[]);

  
  const login=(Auth,imagepath,email,usertype,uname,uid)=>{
    console.log("value after function is hit",Auth);
        setAuth(Auth); 
        setImagepath(imagepath);     //lookout at these two  setauth and setimagepath again ...cause useEffect le nai kam gari sakyo ta
        localStorage.setItem("auth",Auth);               //here we set the local storage
        localStorage.setItem("path",imagepath)
        localStorage.setItem("usertype",usertype)
        localStorage.setItem("email",email)
        localStorage.setItem("name",uname)
        localStorage.setItem("uid",uid)
console.log("valu after login function is hit ",usertype,email);
  }


  const logout=()=>{
    setAuth(false);
    console.log("logged out");
    localStorage.removeItem("auth");

  }
  const context={auth,login,logout,imagepath,loginfo}
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export default authContext;