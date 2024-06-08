import React, { useContext, useState } from 'react';
import "/public/Styles/css/Navbar.css";
import Register from './Register';
import axios from 'axios';
import { AuthContext } from '../Context/authContext';

function Login({ toggle }) {
  const {login,auth} = useContext(AuthContext); // Use context to get login and auth
  const [reg, setReg] = useState(false);
  const [logData, setLogData] = useState({
    email: "",
    password: ""
  });

  const showReg = () => {
    setReg(!reg);
  };

  const handleLog = (event) => {
    setLogData({ ...logData, [event.target.name]: event.target.value });
  };

  const forLog = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", logData);
      if (res.data.success) {
        login(true,res.data.imagepath); // Set auth to true on successful login
        toggle();
        // window.location.reload(true);
        console.log("logged in");
        alert('logged in succesfully!')
      }
      else{
        alert('please check the password and try  agian!');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    console.log(auth)  };

  return (
    <>
      {reg ? (
        <Register showReg={showReg} toggle={toggle} />
      ) : (
        <div>
          <div className="login bg-light ps p-5 rounded">
            <i className="bi bi-x-circle-fill lcr" onClick={toggle} />
            <h1 className="text-primary-emphasis">SIGN IN</h1>
            <br />
            <form onSubmit={forLog}>
              <label htmlFor="email" className="text-primary-emphasis">Email</label><br />
              <div className="position-relative">
                <input type="email" name="email" className="rounded ps-5" required onChange={handleLog} />
                <div className="text-dark fs-4 l">
                  <i className="bi bi-person-circle px-1" />
                </div>
              </div>
              <br /><br />
              <label htmlFor="password" className="text-primary-emphasis">Password</label><br />
              <div className="position-relative">
                <input type="password" className="rounded ps-5" name="password" required onChange={handleLog} /><br /><br />
                <div className="text-dark fs-4 l">
                  <i className="bi bi-key px-1" />
                </div>
              </div>
              <input type="submit" value="Login" className="btn btn-danger" /><br /><br />
              <p className="text-primary-emphasis">New User?</p>
              <button type="button" className="btn btn-outline-primary reg" onClick={showReg}>Register here {`${auth}`} </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
