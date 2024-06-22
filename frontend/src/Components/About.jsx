import React from 'react'
import "/public/Styles/Aboutus.scss"

function About() {
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
          courses
        </div>
        <div className="col-lg-3 col-md-6 d-md-flex d-lg-block gap-3 align-items-center">
          <h1 className="text-weight-bold count" data-count={223}>0</h1>
          <p>instructor</p>
        </div>
        <div className="col-lg-3 col-md-6 d-md-flex d-lg-block gap-3 align-items-center">
          <h1 className="text-weight-bold count" data-count={1233}>0</h1>
          <p>Course-enrollment</p>
        </div>
      </div>
    </div>
  </section>
  <section className="info pt-4">
    <div className="container ">
      <div className="row">
        <div className="col-lg-5 mx-auto text-center">
          <h2 clas="text-dark fw-bold">The leading global marketplace
            for learning and instruction</h2>
        </div>
      </div>
      <div className="about-box row g-4 pt-5 ">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row about-1">
            <div className="col-4 ">
              <div className="img1 rounded" />
            </div>
            <div className="col-8 lh-lg pt-4   mt-3">
              <h3 className="fw-bold">Personalized learning</h3>
              <p className="text-secondary-emphasis">Students practice at their own pace, first filling in
                gaps in their understanding and then accelerating their learning.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row about-1 ">
            <div className="col-4 ">
              <div className="img2 rounded" />
            </div>
            <div className="col-8 lh-lg pt-4 mt-3">
              <h3 className="fw-bold">Empower teachers</h3>
              <p className="text-secondary-emphasis">With Coursector, teachers can identify gaps in their students understanding, tailor instruction</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row about-1 ">
            <div className="col-4 ">
              <div className="img3 rounded" />
            </div>
            <div className="col-8 lh-lg pt-4 mt-3">
              <h3 className="fw-bold">Trusted content</h3>
              <p className="text-secondary-emphasis">Created by experts, Coursector library of trusted practice and lessons covers math, science, and more.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row about-1 ">
            <div className="col-4 ">
              <div className="img4 rounded" />
            </div>
            <div className="col-8 lh-lg pt-4 mt-3">
              <h3 className="fw-bold">Put your learning into practice</h3>
              <p className="text-secondary-emphasis">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    
    
    
    </>
  )
}

export default About