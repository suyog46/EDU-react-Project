import React from 'react'
import "/public/Styles/css/Courses.css"

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

    <br /><br />
    {/* <section class="mb pt-5 mt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 shadow">
                    <div class="search">
                        <div class="search-container">
                            <div class="search-filter">
                                <h4>Search Filters</h4>
                            </div>
                            <form action="" method="GET">
                                <div class="location-search">
                                    <label for="">Choose Courses</label>
                                    <div class="search-bar">
                                        <input id="courses" type="text" placeholder="Name of the course" name="title" />
                                        <i class="magnify fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                                <div class="price-search">
                                    <div class="price-label">
                                        <p>Price Range ( $ )</p>
                                    </div>
                                    <div class="price-input">
                                        <div class="price-field">
                                            <span>Min.</span>
                                            <input type="text" class="input-min" name="min_p" />
                                        </div>
                                        <div class="separator">-</div>
                                        <div class="price-field">
                                            <span>Max.</span>
                                            <input type="text" class="input-max" name="max_p" />
                                        </div>
                                    </div>
                                </div>
                                <div class="category-type">
                                    <h2>Category Type</h2>
                                     */}
                                    
                                    {/* <div class="category-options">
                                        <?php
                                        $sql = "Select * from cat";
                                        $result = mysqli_query($con, $sql);
                                        if ($result) {
                                            while ($row = mysqli_fetch_assoc($result)) {
                                                $checked = [];
                                                if (isset($_GET['category'])) {
                                                    $checked = $_GET['category']; //gets the cat_name from the get method in the form of array
                                                }
                                                echo '
                        <div class="">
                       <input type="checkbox" name="category[]"  id= "' . $row["cat_name"] . '" value=' . $row["cat_name"] . ' ';
                                                if (in_array($row["cat_name"], $checked)) {
                                                    echo 'checked ';
                                                } else {
                                                    echo "";

                                                }
                                                echo '/>
                      <label class="" for="' . $row["cat_name"] . '">' . $row["cat_name"] . '</label>
                    </div>
                        ';
                                            }
                                        }

                                        ?>
                                    </div>
                                </div>
                                <div class="price-search">
                                    <div class="price-label">
                                        <b>
                                            <p>Course duration( hr )</p>
                                        </b>
                                    </div>
                                    <div class="price-input">
                                        <div class="price-field">
                                            <span>Min.</span>
                                            <input type="text" class="input-min" name="min_d" value="<?php if (isset($_GET['min_d'])) {
                                                echo $_GET['min_d'];
                                            }
                                            ?>" />
                                        </div>
                                        <div class="separator">-</div>
                                        <div class="price-field">
                                            <span>Max.</span>
                                            <input type="text" class="input-max" name="max_d" value="<?php if (isset($_GET['max_d'])) {
                                                echo $_GET['max_d'];
                                            }
                                            ?>" />
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <input type="submit" class="btn btn-dark" value="Apply filter" name="submit">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="row g-5">
                        <?php
                        $sql = "SELECT * FROM courses
             INNER JOIN users
             ON courses.uid=users.user_id
             where 1";
                        if (isset($_GET['titlee']) && $_GET['titlee'] != null) {
                            $titlee = $_GET['titlee'];
                            $sql .= " AND title = '$titlee'";
                        }
                        if (isset($_GET['submit'])) {
                            if (isset($_GET['category'])) {
                                $catchecked = [];
                                $catchecked = $_GET['category'];
                                $RcategoryString = implode("', '", $catchecked); //array ko content lai string ma change garna
                                $sql .= " AND category IN ('$RcategoryString')";
                            }
                            if (isset($_GET['min_p']) && $_GET['min_p'] != null) {
                                $minprice = $_GET['min_p'];
                                echo $minprice;
                                $sql .= " AND price >= '$minprice'";
                            }
                            if (isset($_GET['max_p']) && $_GET['max_p'] != null) {
                                $maxprice = $_GET['max_p'];
                                echo $maxprice;

                                $sql .= " AND price <= '$maxprice'";
                            }
                            if (isset($_GET['min_d']) && $_GET['min_d'] != null) {
                                $minduration = $_GET['min_d'];
                                echo $minduration;
                                $sql .= " AND duration >= '$minduration'";
                            }
                            if (isset($_GET['max_d']) && $_GET['max_d'] != null) {
                                $maxduration = $_GET['max_d'];
                                echo $maxduration;
                                $sql .= " AND duration <= '$maxduration'";
                            }

                            if (isset($_GET['title']) && $_GET['title'] != null) {
                                $title = $_GET['title'];
                                $sql .= " AND title = '$title'";
                            }
                        }
                        $result = mysqli_query($con, $sql);

                        if ($result) {
                            while ($row = mysqli_fetch_assoc($result)) {
                                echo '
          <div class="col-4">
          <div class="card bg-body-secondary h" style="width: 20rem;" onmouseover="dis()">
          <div class="card-head he card-img-top">
            <img src="data:image/jpeg;base64,' . $row["image"] . ' "class="w-100 h-100 object-fit-cover">
            <h2 class=" btn btn-primary price rounded-circle">$' . $row["price"] . '
            </h2>
            <h2 class=" btn btn-transparent cate">
                <div class="catr position-relative">  <p class="pr text-light">' . $row["category"] . '
                </p>
           </div>
         
            </h2>
            <a href="innercourse.php?id=' . $row['course_id'] . ' " class="card-link btn btn-dark pre">Preview course</a>
            </div>
   
                <div class="card-body b px-3">
                  <h5 class="card-title">' . $row["title"] . '</h5>
                  <p class="card-text">' . $row["description"] . '</p>
                </div>
                <ul class="px-3">
                  <li class=" d-flex gap-2 justify-content-start">Published by:<img src="data:image/jpeg;base64,' . $row["userimage"] . '"class="rounded-circle object-fit-cover " height="30" width="30"> ' . $row["username"] . '</li>
                  <li class=" d-flex justify-content-between"><p><i class="bi bi-clock-fill pe-2"></i>' . $row["duration"] . 'hrs</p>
                  ';
                                $cid = $row["course_id"];
                                $sqli = 'SELECT COUNT(user_id) AS total_students FROM student_courses WHERE course_id = " ' . $cid . ' " ';
                                $resulti = mysqli_query($con, $sqli);
                                if ($resulti) {

                                    while ($rowi = mysqli_fetch_assoc($resulti)) {
                                        echo '
                  <P><i class="bi bi-people-fill pe-2"></i>' . $rowi["total_students"] . ' students</P>
                  </li>
                  ';
                                    }
                                }
                                echo '
                                </ul>
                  
              </div>
              </div>
            ';
                            }
                        }

                        ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <script src="../Components/main.js"></script>
    <script src="main.js"></script>

</body>

</html> */}
    </>
  )
}

export default Courses