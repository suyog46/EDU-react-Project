import React, { useContext, useState } from 'react'
import "/public/Styles/css/Navbar.css"
import Login from '../Login';
import { AuthContext } from '../../Context/authContext';

function Navbar() {
    const [visible, setVisible]=useState(false);
    const toggle=()=>{
        setVisible(!visible);
    }
const {logout}=useContext(AuthContext)
 const lout=()=>
    {toggle();
    logout();
};

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-transparent">
            <div className="container-lg">
                <a className="navbar-brand" href="#">
                    <img src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt id="logo"  />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="../Home/index.php">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../about-us-/index.php">About us</a>
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
                                <li><a className="dropdown-item" href="#">See more</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-lg-flex gap-4  d-none" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>

                </div>

<button className="btn btn-primary mt-sm-3 mt-lg-0 mx-lg-3 sign-in" onClick={toggle}>Sign in</button> 
<button className="btn btn-primary mt-sm-3 mt-lg-0 mx-lg-3 sign-in" onClick={lout}>logout</button> 


            </div>
        </nav>
        {visible && (<Login toggle={toggle}/>)} 
    {/* visible true xa vani login component visible hunu paryo */}
        </>
    )
}
export default Navbar
{/*?php
              if (isset($_SESSION['login']) && $_SESSION['login']) {
                  echo '
                 <div class="ms-3"*/}
                 
            //      <ul className="navbar-nav">
            //      <li className="nav-item dropdown">
            //          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            //              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="rounded-circle" height={30} width={30} alt />
            //          </a>
            //          <ul className="dropdown-menu">
            //              <li><a className="dropdown-item" href="#">Hi</a></li>
            //              <li>
            //                  <hr className="dropdown-divider" />
            //              </li>
            //              <li><a href="../Components/Logout.php" className="dropdown-item">Logout</a></li>
            //          </ul>
            //      </li>
            //  </ul>