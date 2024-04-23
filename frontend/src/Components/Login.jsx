import React, { useState } from 'react'
import "/public/Styles/css/Navbar.css"
import Register from './Register';
import axios from 'axios';
function Login({toggle}) {
    const [reg, setReg]=useState(false);
    const showReg=()=>{
            setReg(!reg);
            
    }
    const [logData, setlogData]=useState(
        {
          email:"",
          password:""
        }
      )   
      const handleLog=(event)=>{
        setlogData({...logData,[event.target.name]:[event.target.value]})  
      }
      async function forLog(event){
        event.preventDefault();
        const res =  await axios.post("http://localhost:3000/login",logData) ;
    
        if(res.data.success){
            toggle();
            console.log("logged in");
        }     
         }
    
       return (
    <>
{reg ? 
     (<Register showReg={showReg} toggle={toggle}/>): 
            <div>
                <div className="login bg-light ps p-5 rounded ">
                    <i className="bi bi-x-circle-fill lcr"  onClick={toggle}/>
                    <h1 className="text-primary-emphasis">SIGN IN</h1>
                    <br />


                    <form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                        <label htmlFor="email" className="text-primary-emphasis">Email</label><br />
                        <div className="position-relative">
                            <input type="email" name="email" className="rounded ps-5" required onChange={handleLog}/>
                            <div className="text-dark fs-4 l">
                                <i className="bi bi-person-circle px-1" />
                            </div>
                        </div>
                        <br /><br />
                        <label htmlFor="password" className="text-primary-emphasis">Password</label><br />
                        <div className="position-relative">
                            <input type="password" className="rounded ps-5" name="password" required  onChange={handleLog}/><br /><br />
                            <div className="text-dark fs-4 l">
                                <i className="bi  bi-key px-1" />
                            </div>
                        </div>
                        <input type="submit" name="lsubmit" defaultValue="Login" className="btn btn-danger" onClick={forLog}/><br /><br />
                        <p className="text-primary-emphasis">New User?</p><a href className="btn btn-outline-primary reg" onClick={showReg}>Register
                            here
                        </a><p />
                    </form>
                </div>
</div>
}
            </>
            )
}

            export default Login

            {/*  
  if (isset($invalid)) {
      echo '
                  <div class="bg-danger-subtle text-dark border border-danger border-3 px-3 py-2 w-100"
    Invalid username or password<br />
    Please try Again!
  </div> */}

