import React from 'react'
import "/public/Styles/footer.scss"
function Footer() {
  return (
    <>
    <section className="footer bg-dark text-light">
  <div className="row">
    <div className="col-lg-4">
      <div className="footer-left">
        <ul>
          <li><a href>Explore</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href>Courses</a></li>
          <li><a href>Unlock Your Potential</a></li>
          <li><a href>Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="footer-center">
        <ul>
          <li><a href> Clients</a></li>
          <li><a href="#">Become a Teacher</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href>Blog</a></li>
          <li><a href>Our Teachers</a></li>
        </ul>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="footer-right">
        <ul>
          <li><a href><i className="bi bi-geo-alt" /> Address</a></li>
          <li><i className="bi bi-envelope-check pe-2" /><a href="#">eduwe@coursector.com</a></li>
          <li><a href="#">KATHMANDU,NEPAL</a></li>
          <li><a href>Get Direction</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Footer