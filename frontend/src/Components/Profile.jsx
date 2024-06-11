import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import  { AuthContext } from '../Context/authContext'
import { Link } from 'react-router-dom';

function Profile() {
    const {loginfo}=useContext(AuthContext);
    const {imagepath}=useContext(AuthContext);
   
  
  return (
    <>
    <br /><br /><br />
    {console.log(loginfo)};
    <h1 className='fw-b text-uppercase text-center'> profile page</h1>
    
    <div class="d-flex justify-content-evenly">

    <h2 className="text-primary ">Hello {loginfo.name}</h2>  
      <img src={`http://localhost:3000/${imagepath}`} className='m-3 rounded-circle object-fit ' height={40} width={40}/>
    </div>
    

    <h3 className="text-danger">your email is {loginfo.email}</h3>
    <h4 className="text-success">you are a {loginfo.usertype}</h4>
  <h4>your id is {loginfo.uid}</h4>
  {loginfo.usertype === "teacher" ? (
       <Link to={`/Addcourse/${loginfo.uid}`}>
         <button className="btn btn-primary mx-auto my-5">Add courses</button>
       </Link> 
      ) : (
        <h1>Hello student</h1>
      )}
    </>
  )
}

export default Profile