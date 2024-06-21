import React, { useContext, useState } from 'react'
import "/public/Styles/css/Navbar.css"
import Login from '../Login';

import { AuthContext } from '../../Context/authContext';
import { Route,Routes,Link, BrowserRouter } from 'react-router-dom';

function Navbar() {
    const [visible, setVisible]=useState(false);
    const toggle=()=>{
        setVisible(!visible);
    }
const {logout,auth,loginfo}=useContext(AuthContext)
 const lout=()=>
    {toggle();
    logout();
};
console.log("info",loginfo);
console.log("auth in the navbar",auth);

    return (
        <>
       
        <nav className="navbar navbar-expand-lg bg-body-transparent">
            <div className="container-lg">
                <Link className="navbar-brand" to="/">
                    <img src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt id="logo"  />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Politics</a></li>
                                <li><a className="dropdown-item" href="#">History</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/co">See more</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-lg-flex gap-4  d-none" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
 
{auth ?(
    <div>

    <Link to='/profile'>
    <img src={`http://localhost:3000/${loginfo.imagepath}`} className='m-3 rounded-circle object-fit' height={40} width={40}/>
    </Link>
    <button className="btn btn-primary mt-sm-3 mt-lg-0 mx-lg-3 sign-in" onClick={lout}>logout</button>
    </div>):( <button className="btn btn-primary mt-sm-3 mt-lg-0 mx-lg-3 sign-in" onClick={toggle}>Sign in</button>)}
            </div>
        </nav>
        {visible && (<Login toggle={toggle}/>)} 
    {/* visible true xa vani login component visible hunu paryo */}
        </>
    )
}
export default Navbar
