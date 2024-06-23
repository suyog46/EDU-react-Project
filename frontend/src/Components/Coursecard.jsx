import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../Context/authContext'
import axios  from 'axios'
import { Link } from 'react-router-dom';

function Coursecard({course,setCourse}) {
  const cid=course.cid;
  const {categoryData,fetchTeacher}=useContext(AuthContext);
  const [teacher_data,setTeacher_data]=useState({});
  useEffect(()=>{
    const data=async ()=>{
            setTeacher_data(await fetchTeacher(cid));
            
          }
          data()
        },[])
console.log("course at the coursecard ",course);
  
console.log("teacher ",teacher_data
);
return (
  <>
    {/* {console.log("to be displayed",course)} */}
      {/* <div className="col-lg-4 border border-primary"> */}
        <div className="card bg-body-secondary h" style={{ width: '20rem'}}  key={course.course_id}>
          <div className="card-head he card-img-top">
            <img
              src={`http://localhost:3000/${course.image}`}
              className="w-100 h-100 object-fit-cover"
              alt={course.title}
            />
            <h2 className="btn btn-primary price rounded-circle">${course.price}</h2>
            <h2 className="btn btn-transparent cate">
              <div className="catr position-relative">
                <p className="pr text-light">{course.category}</p>
              </div>
            </h2>
            <Link to={`/Innercourse/${course.cid}`} className="card-link btn btn-dark pre">Preview course</Link>
          </div>
          <div className="card-body b px-3">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">{course.description}</p>
          </div>
          <ul className="px-3">
            <li className="d-flex gap-2 justify-content-start">
              {/* Published by:{teacher_data.username} */}
              {/* <img
                src={`http://localhost:3000/${teacher_data.Image}`}
                className="rounded-circle object-fit-cover"
                height="30"
                width="30"
                alt={course.username}
              /> */}
              {course.username}
            </li>
            <li className="d-flex justify-content-between">
              <p><i className="bi bi-clock-fill pe-2"></i>{course.duration}hrs</p>
              <p><i className="bi bi-people-fill pe-2"></i>{categoryData[course.category]} students</p>
            </li>
          </ul>
        </div>
      {/* </div> */}
    {/* ))} */}
   
  </>
);
}

export default Coursecard