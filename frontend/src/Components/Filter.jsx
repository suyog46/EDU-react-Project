import React, { useLayoutEffect, useState } from 'react'

function Filter(course_Detail) {
  const [search, setSearch] = useState("");
const course=course_Detail.course;
const setCourse=course_Detail.setCourse;
console.log("course",course_Detail);
console.log("course at the filter",course_Detail.course);

const handleSorting = (e) => {
  const value = e.target.value;
  if (value === 'lowToHigh') {
    const sortedCourses = course.sort((a, b) => a.price - b.price);
    setCourse([...sortedCourses]);
  } else if (value === 'HighToLow') {
    const sortedCourses = course.sort((a, b) => b.price - a.price);
    setCourse([...sortedCourses]);
  } else if (value === 'newest') {
    const sortedCourses = course.sort((a, b) => new Date(b.date) - new Date(a.date));
    setCourse([...sortedCourses]);
  } else if (value === 'oldest') {
    const sortedCourses = course.sort((a, b) => new Date(a.date) - new Date(b.date));
    setCourse([...sortedCourses]);
  }
}

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredcourse = course.filter((course) => {
      return course.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCourse([...filteredcourse]);
  }

console.log(course);

  return (
   <>

    <div className="col-3 shadow float-start ">
      <div className="search">
        <div className="search-container">
          <div className="search-filter">
            <h4>Search Filters</h4>
          </div>
          <form action method="GET">       
            <div className="location-search">
              <label htmlFor>Choose Courses</label>
              <div className="search-bar">
                <input id="courses" type="text" placeholder="Name of the course" name="title" onChange={handleSearch} />
                <i className="magnify fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="price-search">
              <div className="price-label">
                <p>Price Range ( $ )</p>
              </div>
              <div className="price-input">
                <div className="price-field">
                  <span>Min.</span>
                  <input type="text" className="input-min" name="min_p" />
                </div>
                <div className="separator">-</div>
                <div className="price-field">
                  <span>Max.</span>
                  <input type="text" className="input-max" name="max_p" />
                </div>
              </div>
            </div>
            <div className="category-type">
              <h2>Category Type</h2>
              <div className="category-options">
                {/* ?php
                                  $sql = "Select * from cat";
                                  $result = mysqli_query($con, $sql);
                                  if ($result) {
                                      while ($row = mysqli_fetch_assoc($result)) {
                                          $checked = [];
                                          if (isset($_GET['category'])) {
                                              $checked = $_GET['category']; //gets the cat_name from the get method in the form of array
                                          }
                                          echo '
                  <div class="" */}
              
              <ul>
                  {

                                        course.map((a)=>(
                    <>  
                        
              <li><input type="checkbox"  />
                    <label className="" >{a.category}</label></li>
                    </>

                  ))}
                  </ul>
              </div>
          
            </div>
          </form></div>
        <div className="price-search">
          <div className="price-label">
            <b>
              <p>Course duration( hr )</p>
            </b>
          </div>
          <div className="price-input">
            <div className="price-field">
              <span>Min.</span>
              <input type="text" className="input-min" name="min_d" defaultValue="" />
            </div>
            <div className="separator">-</div>
            <div className="price-field">
              <span>Max.</span>
              <input type="text" className="input-max" name="max_d" defaultValue="" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <input type="submit" className="btn btn-dark" defaultValue="Apply filter" name="submit" />
        </div>
      </div>
    </div>


  </>


  )
}

export default Filter