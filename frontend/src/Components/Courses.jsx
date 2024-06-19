import React from 'react'
import "/public/Styles/css/Courses.css"
import Coursecard from './Coursecard'

function Courses() {
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
              {/*?php
                          $cat = "business";
                          echo totalcat($cat);
                          ?*/}
                          10
              courses
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
              {/*?php
                          $cat = "art";
                          echo totalcat($cat);
                          ?*/}
                          10
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
              {/*?php
                          $cat = "programming";
                          echo totalcat($cat);
                          ?*/}
                          11
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
              {/* ?php
                          $cat = "history";
                          echo totalcat($cat);
                          ? */}
                          10
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
              {/* ?php
                          $cat = "others";
                          echo totalcat($cat);
                          ? */}
                          99
              courses
            </p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container mt-5 ">
<Coursecard/>
</div>

    <br /><br />

   
    </>
  )}



export default Courses