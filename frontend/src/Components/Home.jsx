import React from 'react'
import "/public/Styles/css/Home.css"

function Home() {
  return (
<section className="firstview">
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
  )
}

export default Home