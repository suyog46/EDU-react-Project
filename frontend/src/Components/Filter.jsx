import React, { useLayoutEffect, useState } from 'react'

function Filter(course_Detail) {
  const [search, setSearch] = useState("");
  const course = course_Detail.course;
  const setCourse = course_Detail.setCourse;
  console.log("course", course_Detail);
  console.log("course at the filter", course_Detail.course);


  const [selectedOptions, setSelectedOptions] = useState([]);

 
  const catdata = (event) => {
    const { value, checked } = event.target;
    console.log(value);
    let updatedOptions = [...selectedOptions];
    if (checked) {
       if (!updatedOptions.includes(value)) {
      updatedOptions.push(value)
       }

      //(prevSelectedOptions => [...prevSelectedOptions, value]) is an arrow function with a single argument (prevSelectedOptions). This function:
// Uses the spread operator (...) to create a new array ([...prevSelectedOptions]), which copies all elements from the prevSelectedOptions array.
// Appends (value) to the end of this new array.
    } else {
      updatedOptions = updatedOptions.filter(option => option !== value);
    }
    console.log(selectedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Options:", selectedOptions);
    // Perform any other actions with selectedOptions here
  };


  const handleSorting = (e) => {
    console.log("reached sorting")
    const value = e.target.value;
    if (value === 'lowToHigh') {
      const sortedCourses = course.sort((a, b) => a.price - b.price);

      //     Compare Elements:

      // The function subtracts b.price from a.price.
      // If a.price is less than b.price, the result will be negative.
      // If a.price is equal to b.price, the result will be zero.
      // If a.price is greater than b.price, the result will be positive.
      // Sort Order:

      // For negative results (a.price - b.price < 0), a comes before b (ascending order).
      // For zero results (a.price - b.price === 0), the order of a and b remains unchanged.
      // For positive results (a.price - b.price > 0), b comes before a (descending order)

      // to sort alphabet wise
      // const strings = ["banana", "apple", "cherry"];
      // strings.sort((a, b) => a.localeCompare(b));  // ["apple", "banana", "cherry"
      setCourse([...sortedCourses]);
    } else if (value === 'HighToLow') {
      console.log("sort", course)
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
        <div className="flex md:justify-start py-2 mx-4 md:mx-40">
          <select className="border-2 border-gray-200 rounded-md py-2 px-4" onChange={handleSorting}>
            <option>Sort by</option>
            <option value='lowToHigh'>Price Low to High</option>
            <option value='HighToLow'>Price High to Low</option>
            <option value='newest'>Newest</option>
            <option value='oldest'>Oldest</option>
          </select>
        </div>
        <div className="search">
          <div className="search-container">
            <div className="search-filter">
              <h4>Search Filters</h4>
            </div>
            <form >
              <div className="location-search">
                <label htmlFor>Choose Courses</label>
                <div className="search-bar">
                  <input id="courses" type="text" placeholder="Name of the course" name="title" onChange={handleSearch} />
                  <i className="magnify fa-solid fa-magnifying-glass" />
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
                    
                      

                          <li><input type="checkbox"  name="programming" value="programming" onChange={catdata}/>
                            <label className="" >Programming</label></li>                      
                            <li><input type="checkbox"  name="business" value="business" onChange={catdata} />
                            <label className="" >Business</label></li>
                          <li><input type="checkbox"  name="politcs" value="politcs" onChange={catdata} />
                            <label className="" >Politcs</label></li>
                          <li><input type="checkbox"  name="art" value="art" onChange={catdata}/>
                            <label className="" >Art</label></li>
                            <li><input type="checkbox"  name="languages" value="languages" onChange={catdata} />
                            <label className="" >Languages</label></li>
                            <li><input type="checkbox"  name="others" value="others" onChange={catdata} />
                            <label className="" >Others</label></li>

                  
                  </ul>
                </div>

              </div>
          
            <div className="text-center">
            <input type="submit" className="btn btn-dark" defaultValue="Apply filter" name="submit" />

            </div>
        </form >
        </div>
      </div>
</div>

  </>


  )
}

export default Filter