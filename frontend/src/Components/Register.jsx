import axios from "axios";
import React, { useState } from 'react'
import "/public/Styles/css/Navbar.css"
function Register({showReg,toggle}) {
  const showBoth=()=>{
    showReg();
    toggle();
  }

  //for form data
  const [formData, setFormData]=useState(
    {
      uname:"",
      email:"",
      password:"",
      logintype:"",
    }
  )
  const handleInput=(event)=>{
    setFormData({...formData,[event.target.name]:event.target.value}) 

    /*to
      create a shallow copy of the existing formData object. This is a common pattern in React to ensure immutability when updating state.
     this code updates the formData object by creating a new object that copies all the properties from formData, then adds or updates a property with a name corresponding to the name attribute of the input element that triggered the event, and sets its value to the current value of that input element. Finally, it updates the state using setFormData with the newly created object.*/
  }
  async function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
    const res =  await axios.post("http://localhost:3000/signup",formData) ;

    console.log(res);

    if(res.data.success){
      console.log("dsad");
      showBoth();
    }
  }

  
  return (
    <>
    <div className="register  ps  rounded bg-light text-dark" >
        <i className="bi bi-x-circle-fill rcr"  onClick={showBoth}/>
        <form  method="POST" enctype="multipart/form-data">
        <div className="row">
      <div className="col-12 pb-3">
        <h1 className="mt-4">Register</h1>
        <br />
        <div className="position-relative">
          <input type="text" name="uname" className="rounded ps-5" placeholder="Username" autofocus required onChange={handleInput} />
          <div className="text-dark fs-4 l">
            <i className="bi bi-person-circle px-1" />
          </div>
        </div>
        <div className=" w-70 pe">
          {/*?php
                if (isset($nameerror)) {
                    echo '
                Name already exists!
                ';
                } else {
                    echo '';
                }
                ?*/}
        </div>
        <br />
        <div className="position-relative">
          <input type="email" name="email" className="rounded ps-5" placeholder="Email" required  onChange={handleInput}/>
          <div className="fs-4 l">
            <i className="bi bi-envelope-check px-1" />
          </div>
        </div>
        <div className=" w-70 pe">
          {/*?php
                if (isset($emailerror)) {
                    echo '
                Email already exists!
                ';
                } else {
                    echo '';
                }
                ?*/}
        </div>
        <br />
        <div className="position-relative">
          <input type="password" className="rounded password ps-5" id="password" name="password" placeholder="Password" required  onChange={handleInput}/>
          <div className="fs-4 l">
            <i className="bi bi-key-fill px-1" />
          </div>
        </div>
        <div className=" w-70 pv">
          * Password must contain:<br /> Minimum 8 characters, 1 uppercase , 1 lowercase, 1 number and
          1special character.*
        </div>
        <br />
        <div className="position-relative">
          <input type="password" name="pconfirm" id="pconfirm" className="rounded ps-5" placeholder="Confirm Password" required  onChange={handleInput}/>
          <div className="fs-4 l">
            <i className="bi bi-key-fill px-1" />
          </div>
        </div>
        <br />
        <label htmlFor="pconfirm ms-4">Login as</label><br />
        <input type="radio" name="logintype" id="teacher" className="rd ms-2 mt-2" defaultValue="teacher" required  onChange={handleInput}/>
        <label htmlFor="teacher">
          Teacher
        </label>
        <input type="radio" name="logintype" id="student" className="rd ms-2 mt-2" defaultValue="student" required onChange={handleInput} />
        <label htmlFor="student">
          Student
        </label>
        <br /><br />
        <label htmlFor="Image">Choose a profile picture</label><br />
        <input type="file" name="image" id="Image" className="rounded" onChange={handleInput} /><br /><br />
        <input type="submit" name="submit" defaultValue="submit" className="but rounded" onClick={handleSubmit} />
      </div>
    </div>
  </form>
</div >
</>

  )
}

export default Register