import React, { useContext, useEffect } from 'react'
import "/public/Styles/Home.scss"
import { AuthContext } from '../Context/authContext'

function Home() {
  const {name,categoryData}=useContext(AuthContext);
  console.log(name);
  useEffect( function () {
    const images = ["../Images/home1.jpg", "../Images/home2.jpg", "../Images/home3.jpg"];
    let index = 0;

    function changeBackground() {
        const backgroundSlider = document.querySelector(".firstview");
        backgroundSlider.style.backgroundImage = `url(${images[index]})`;

        if (index === images.length - 1) {
            index = 0;
        } else {
            index++;
        }
        setTimeout(changeBackground, 5000); 
    }

    changeBackground();
});

  return (
    <>
    <section className="firstview" >
  <div className="view-text position-absolute">
    <h1 className="fs-1">Learning for a <span>
        Lifetime</span></h1>
    <p>
      <span>Advance</span> your career. Pursue your passion.
      Keep learning.
    </p>
    <a href="../Courses/allcourses.php" className="but btn rounded-pill fc shadow">Find courses</a>
  </div>
</section>
<section className="py-3 container dis">
  <div className="row icons g-5 flex-wrap ">
    <div className="col-lg-4  gap-4 d-flex align-items-center">
      <img src="../Images/ic2.png" alt />
      <div className="icon-text">
        <h4>
          8,000 online courses</h4>
        <p>Explore a variety of fresh topics</p>
      </div>
    </div>
    <div className="col-lg-4  gap-4  d-flex align-items-center">
      <img src="../Images/ic2.png" alt />
      <div className="icon-text">
        <h4>
          Expert instruction</h4>
        <p>Find the right instructor for you</p>
      </div>
    </div>
    <div className="col-lg-4  gap-4  d-flex align-items-center">
      <img src="../Images/ic3.png" alt />
      <div className="icon-text">
        <h4>
          Lifetime access</h4>
        <p>Learn on your schedule</p>
      </div>
    </div>
  </div>
</section>
<section className="category container">
  <div className="  category-text  lh-lg text-center">
    <h1 className="fs-3">
      BROWSE ONLINE COURSE CATEGORIES
    </h1>
    <p>
      Online learning offers a new way to explore subjects <br />you’re passionate about. Find your interests by
      browsing our online course categories:
    </p>
  </div>
  <div className="row cat g-4 p-5">
    <div className="col-lg-4 col-md-6">
      <div className="catb ">
        <div className="catb-inner shadow rounded">
          <div className="catb-front  catf-1 rounded">
            <h1>Business</h1>
          </div>
          <div className="catb-back rounded catb-1">
            <div className="back-text">
              <h3>
             {categoryData.business}
                courses</h3>
              <a href="../Courses/allcourses.php" className="btn btn-primary rounded-pill">View all courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="catb ">
        <div className="catb-inner shadow rounded">
          <div className="catb-front  catf-2 rounded">
            <h1>Arts</h1>
          </div>
          <div className="catb-back rounded catb-2">
            <div className="back-text">
              <h3>
              {categoryData.art}

                courses</h3>
              <a href="../Courses/allcourses.php" className="btn btn-primary rounded-pill">View all courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="catb ">
        <div className="catb-inner shadow rounded">
          <div className="catb-front  catf-3 rounded">
            <h1>Languages</h1>
          </div>
          <div className="catb-back rounded catb-1">
            <div className="back-text">
              <h3>
              {categoryData.languages}
   
                courses</h3>
              <a href="../Courses/allcourses.php" className="btn btn-primary rounded-pill">View all courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="catb ">
        <div className="catb-inner shadow rounded">
          <div className="catb-front  catf-4 rounded">
            <h1>Programming</h1>
          </div>
          <div className="catb-back rounded catb-4">
            <div className="back-text">
              <h3>
              {categoryData.programming}
  
                courses</h3>
              <a href="../Courses/allcourses.php" className="btn btn-primary rounded-pill">View all courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="catb ">
        <div className="catb-inner shadow rounded">
          <div className="catb-front  catf-5 rounded">
            <h1>Politics</h1>
          </div>
          <div className="catb-back rounded catb-5">
            <div className="back-text">
              <h3>
              {categoryData.politics}
     
                courses</h3>
              <a href="../Courses/allcourses.php" className="btn btn-primary rounded-pill">View all courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="catb ">
        <div className="catb-inner shadow rounded">
          <div className="catb-front  catf-6 rounded">
            <h1>Others</h1>
          </div>
          <div className="catb-back rounded catb-6">
            <div className="back-text">
              <h3>
              {categoryData.others}
    
                courses</h3>
              <a href="../Courses/allcourses.php" className="btn btn-primary rounded-pill">View all courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a href="../Courses/allcourses.php" className="text-decoration-none text-dark">
    <div className="but mx-auto text-center rounded-pill py-3">VIEW ALL COURSES</div>
  </a>
</section>

</>
  )
}

export default Home