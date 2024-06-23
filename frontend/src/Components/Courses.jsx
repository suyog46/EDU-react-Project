import React, { useEffect, useState,useContext, Children } from 'react'
import "/public/Styles/css/Courses.css"
import Coursecard from './Coursecard'
import Filter from './Filter'
import { AuthContext } from '../Context/authContext'
import axios  from 'axios'
import { Link } from 'react-router-dom';

function Courses() {
  
  const[course,setCourse]=useState([]);
  const {token,categoryData}=useContext(AuthContext);
  useEffect(
    ()=>{
              const fetchData=async()=>{
                               const res=await axios.post('http://localhost:3000/fetchcourse/', {}, {
                          headers: {
                            'Authorization': `Bearer ${token}` 
                           
                          }}).then((res)=>{const course=res.data.data
                              setCourse(course);
                      })
              console.log("At courses catdata",categoryData);
                  }
                  fetchData();
      }
  
     
      ,[]);
      const course_det={course,setCourse};
  console.log("after evrythhing",course)
  return (
    <>
    <section className="head position-relative">
  <div className="container-fluid">
    <div className="row ">
      <div className="col-lg-8  ">
        <div className="head-left mx-3 mt-5 pt-5">
          <h2>
            Join the Millions Learning to Code
          </h2>
          <h6>Want to excel at finance or managing people? Our online business and management courses will
            help.Further
            your career with communication, networking</h6>
        </div>
      </div>
    </div>
  </div>
  <div className="box position-absolute shadow ">
    <div className="row  ">
      <div className="col-lg-2">
        <div className="imgc">
          <a href="outercourse.php?categogry='"><img src="Images/business.icon.png" alt /></a>
          <div className="text  pt-2  ">
            <h5>Business</h5>
            <p>
         {categoryData.business}courses
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 ">
        <div className="imgc h-100">
          <a href><img src="Images/creative.icon.png" alt /></a>
          <div className="text  pt-2  ">
            <h5>Creative Arts</h5>
            <p>
            {categoryData.art}
courses
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="imgc h-100 ">
          <a href><img src="Images/environment.icon.png" alt /></a>
          <div className="text  pt-2  ">
            <h5>Environment</h5>
           <p>
              {/*?php
                          $cat = "environment";
                          echo totalcat($cat);
                          ?*/} 01 
                          courses
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-2 ">
        <div className="imgc  h-100">
          <a href><img src="Images/tech.icon.png" alt /></a>
          <div className="text  pt-2  ">
            <h5>Programming</h5>
             <p>
             {categoryData.programming}

              courses
            </p> 
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="imgc  h-100 ">
          <a href><img src="Images/history.icon.png" alt /></a>
          <div className="text  pt-2  ">
            <h5>History</h5>
             <p>
             {categoryData.business}

              courses
            </p> 
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="imgc  h-100">
          <a href><img src="Images/literaure.icon.png" alt /></a>
          <div className="text  pt-2  ">
            <h5>Others</h5>
          <p>
          {categoryData.others}

              courses
            </p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container-fluid course-page ">
  <div className="row ">
  
    <Filter course={course} setCourse={setCourse}/>
 
 <div className='col-lg-9'>

  <div className="row gap-5 ps-5">
  {course.map((course) => (
    
    <Coursecard course={course} setCourse={setCourse}/>
  ))}
  </div>
  </div>
  </div>
</div>
    <br /><br />

   
    </>
  )}



export default Courses