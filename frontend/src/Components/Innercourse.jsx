import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../Context/authContext'
import axios  from 'axios'
import { useParams } from 'react-router-dom';

function Innercourse() {
    
    const[course,setCourse]=useState({});
const {token}=useContext(AuthContext);
const { id } = useParams(); 
useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.post(
                'http://localhost:3000/fetchcoursedetail/',
                { id: id }, // Send id as data to the server
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const courseData = res.data.innerdata[0];
            setCourse(courseData);
            console.log(courseData); 
        } catch (error) {
            console.error('Error fetching course:', error);
        
        }
    };

    fetchData(); 
}, [id, token]); 
console.log(course[0]);
if (!course) {
    return <div>Loading...</div>;
  }

  // Conditional check to ensure course.overview is defined
  const vidpath = course.overview ? course.overview.replace(/\\/g, '/') : '';

    return (
        <>
    
      
            <br /><br /><br /><br />
             <div className="container">
                <h1 className="fw-bold fs-3"></h1>
                <div className="container shadow p-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{course.title}</h1>
                            <br />
                            <video width="730" height="360" controls>
                                <source src={`http://localhost:3000/${vidpath}`} type="video/mp4" />
                            </video>
                        </div>
                        <div className="col-lg-4 lh-lg">
                            <h1>{course.price}</h1>
                            {/* {(userType !== "teacher" && userType !== "Admin") && (
                                <form onSubmit={(e) => { e.preventDefault(); handleEnroll(); }}>
                                    <br /><br />
                                    {enrolled ? (
                                        <p className="btn btn-danger mx-auto">Already enrolled</p>
                                    ) : (
                                        <button type="submit" className="btn btn-primary mx-auto">Enroll this course</button>
                                    )}
                                </form>
                            )} */}
                            <div className="info">
                                <p><i className="bi bi-alarm"></i> Duration: {course.duration}</p>
                                <p><i className="bi bi-hand-thumbs-up-fill"></i> Skill level: {course.courselevel}</p>
                                <p><i className="bi bi-book"></i> Lecture: {course.language}</p>
                                <p><i className="bi bi-translate"></i> Language: {course.language}</p>
                                <p><i className="bi bi-patch-check-fill"></i> Certificate of completion</p>
                                <p><i className="bi bi-people-fill pe-2"></i>{course.totalStudents} students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="btn btn-outline-primary b1">Overview</div>
                            <div className="btn btn-outline-primary b2">Curriculum</div>
                            <div className="btn btn-outline-primary b3">Instructor</div>
                        </div>
                        <div className="col-lg-12 t1 pt-3">
                            <h3>Course description</h3>
                            <p>{course.detaildescription}</p>
                            <br /><br />
                            <h3>Who is this course for</h3>
                            <p>{course.targetaudience}</p>
                        </div>
                        <div className="col-lg-12 t2 pt-3">I am text2</div>
                        <div className="col-lg-12 t3 pt-3">
                            <div className="row">
                                <div className="col-1">
                                    {/* <img src={`data:image/jpeg;base64,${course.instructor.userimage}`} className="rounded-circle object-fit-cover" height="100" width="100" alt={course.instructor.username} />
                                    <h5>{course.instructor.username}</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Innercourse