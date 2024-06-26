import React, { useContext, useState } from 'react'
import "/public/Styles/Addcourse.scss"
import axios from 'axios'
import { AuthContext } from '../Context/authContext';

function Addcourse() {
  const {token}=useContext(AuthContext)
  const [coursedata, setCoursedata] = useState({
    course_title: "",
    course_image: null,
    cover_description: "",
    detail_description: "",
    course_price: "",
    course_category: "",
    course_duration: "",
    course_level: "",
    course_video: null,
    course_language: "",
    target_audience: "",
    about_yourself: "",

  })

  const handleInput = (event) => {
    setCoursedata({ ...coursedata, [event.target.name]: event.target.value })
  }

  async function submit(event) {
    event.preventDefault();
    const res = await axios.post("http://localhost:3000/coursedata",coursedata, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      }
    });
  
    console.log(res.data); 

    if (res.data.success) {
      alert("course added successfully");
    }
    else {
      alert("error in inserting the data");
    }
  }


  return (
    <>
  <div>
    <section className="firstview position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="view-text pt-5 mt-5 lh-sm">
              <p className="text-light">
                ABOUT US
              </p>
              <h1>
                Improving Lives Through Learning
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-lg-5 pt-lg-5 pt-md-5 pt-sm-0">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 d-md-flex d-lg-block gap-3 align-items-center">
            <h1 className="text-weight-bold count" data-count={2000}>0</h1>
            <p>Students</p>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex d-lg-block gap-3 align-items-center">
            <h1 className="text-weight-bold count" data-count={3432}>0</h1>
            <p>Courses</p> 
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex d-lg-block gap-3 align-items-center">
            <h1 className="text-weight-bold count" data-count={223}>0</h1>
            <p>Instructors</p> 
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex d-lg-block gap-3 align-items-center">
            <h1 className="text-weight-bold count" data-count={1233}>0</h1>
            <p>Course Enrollments</p> 
          </div>
        </div>
      </div>
    </section>
  </div>

  <div className="wrapper">
    <div id="body" className="active">
      <div className="content mt-5">
        <div className="container">
          <h1>ADD a new course</h1>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">Course Overview</div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <form onSubmit={submit} encType='multipart/form-data'> 
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Course Title</label>
                      <div className="col-sm-10">
                        <input type="text" name="course_title" id="Title" className="form-control" required onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Cover Image</label>
                      <div className="col-sm-10">
                        <input type="file" name="course_image" id="cimage" className="form-control" onChange={handleInput} />
                        <small className="form-text text-muted">Add a cover image for your course</small>
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Cover Description</label>
                      <div className="col-sm-10">
                        <textarea id="des" name="cover_description" rows={4} className="form-control" placeholder="Describe the overview of the course" defaultValue={""} onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Detail Description</label>
                      <div className="col-sm-10">
                        <textarea id="des" name="detail_description" rows={4} className="form-control" placeholder="Describe in detail about the course" defaultValue={""} onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Price</label>
                      <div className="col-sm-10">
                        <input type="number" name="course_price" id="cprice" className="form-control" onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Category</label>
                      <div className="col-sm-10 select">
                        <select id="category" name="course_category" className="form-select" onChange={handleInput}>
                          <option value="programming">Programming</option>
                          <option value="politics">Politics</option>
                          <option value="art">Art</option>
                          <option value="business">Business</option>
                          <option value="languages">Languages</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Course Duration</label>
                      <div className="col-sm-10">
                        <input type="number" name="course_duration" id="cd" className="form-control" onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Course Level</label>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="course_level" id="bg" value="Beginner" onChange={handleInput} />
                          <label className="form-check-label" htmlFor="bg">Beginner</label><br />
                          <input className="form-check-input" type="radio" name="course_level" id="im" value="Intermediate" onChange={handleInput} />
                          <label className="form-check-label" htmlFor="im">Intermediate</label><br />
                          <input type="radio" className="form-check-input" name="course_level" id="pr" value="Professional" onChange={handleInput} />
                          <label htmlFor="pr">Professional</label>
                        </div>
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Overview Video</label>
                      <div className="col-sm-10">
                        <input type="file" name="course_video" id="cvideo" className="form-select" onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label" htmlFor="lg">Language</label>
                      <div className="col-sm-10">
                        <select id="lg" name="course_language" className="form-select" onChange={handleInput}>
                          <option value="English">English</option>
                          <option value="Nepali">Nepali</option>
                          <option value="Hindi">Hindi</option>
                        </select>
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">Target Audience</label>
                      <div className="col-sm-10">
                        <textarea id="who" name="target_audience" rows={8} className="form-control" placeholder="Describe in detail about the targeted audience" defaultValue={""} onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label">About Yourself</label>
                      <div className="col-sm-10">
                        <textarea id="longText" name="about_yourself" rows={8} className="form-control" placeholder="Describe about yourself as an instructor in this course" defaultValue={""} onChange={handleInput} />
                      </div>
                    </div>
                    <div className="line"></div><br />
                    <div className="mb-3 row">
                      <div className="col-sm-4 offset-sm-2">
                        <button type="submit" name="submit" className="btn btn-primary mb-2"><i className="fas fa-save"></i> Submit</button>
                      </div>
                    </div>
                  </form> {/* Close form tag properly */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}


export default Addcourse