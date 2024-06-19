var express = require('express');
var router = express.Router();
const cors = require('cors');
const con = require("./connection"); //page ko nam...ani uta bata k aauxa chai ..uta k export garexa tes ma var parxa
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const upload= require('./multer');
const jwt=require('jsonwebtoken');
dotenv.config();

// const salt= process.env.salt;

const salt = 10;

router.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["POST", "GET", "DELETE", "PUT"],
  optionsSuccessStatus: 200
})
)

// app.post("/single", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.send("Single FIle upload success");
// });

router.post("/signup",upload.single("Image"), (req, res) => {
  console.log(req.body)
  const name = req.body.uname;
  const email = req.body.email;
  const userType = req.body.logintype;
const Imagepath=req.file.path;
if (!name || !email || !req.body.password || !Imagepath) {
  return res.status(400).json({ Error: "Missing required fields" });
}
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing password" });

    const values = [name, email, hash,Imagepath,userType];
    const insertUserQuery = "INSERT INTO user (username, email, password,Image,usertype) VALUES (?)";
    con.query(insertUserQuery, [values], function (err, result) {
      if (err) return res.json({ Error: "Error inserting data" });
      return res.json({ message: "User successfully registered", success: true });

    });

  });


})
router.post("/fetchcoursedetail",authenticateToken,(req,res)=>{
    const value=req.accessid.id;
    const {id}=req.body
  
      const sql1="Select * from Courses where cid=?"
    con.query(sql1,id,(err,result1)=>{
      if(err){
        return(res.json({message:"error in fetching the course for the innercourse"}))
      }
      return(
        res.json({message:"success",innerdata:result1})
      )
    })
  }
)
  

router.post("/fetchcourse",authenticateToken,(req,res)=>{

const sql="Select * from Courses";
con.query(sql,(err,result)=>{
  if(err){
    return(res.json({message:"error in fetching the course"}))
  }
  return(
    res.json({message:"success",data:result})
  )
})

})
router.get("/checkenrollment/:id", authenticateToken, (req, res) => {
  const { id } = req.params; 
  const uid = req.accessid.id; 

  const sql = "SELECT * FROM student_course WHERE student_id = ? AND course_id = ?";
  con.query(sql, [uid, id], (err, result) => {
    if (err) {
      console.error("Error in fetching enrollment status:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (result.length > 0) {
      return res.json({ message: "success", enrolled: true });
    } else {
      return res.json({ message: "success", enrolled: false });
    }
  });
});

router.post("/coursedata",upload.fields([{ name: 'course_image', maxCount: 1 }, { name: 'course_video', maxCount: 1 }]),authenticateToken,function(req,res){
 const course_title=req.body.course_title
 const t_id=req.accessid.id
 console.log(req);
 const course_image = req.files['course_image'] ? req.files['course_image'][0].path : null;
 const course_video = req.files['course_video'] ? req.files['course_video'][0].path : null;
 
// {
//   "course_image": [                                   yo format ma haldinxa 
//     {
//       "fieldname": "course_image",
//       "originalname": "image.jpg",
//       "encoding": "7bit",
//       "mimetype": "image/jpeg",
//       "destination": "./public/images",
//       "filename": "1625246521456--image.jpg",
//       "path": "./public/images/1625246521456--image.jpg", //multer engine ma configure gareko path
//       "size": 12345
//     }
//   ],
//   "course_video": [
//     {
//       "fieldname": "course_video",
//       "originalname": "video.mp4",
//       "encoding": "7bit",
//       "mimetype": "video/mp4",
//       "destination": "./public/videos",
//       "filename": "1625246521456--video.mp4",
//       "path": "./public/videos/1625246521456--video.mp4",
//       "size": 987654
//     }
//   ]
// }
const {
  about_yourself,
    course_duration,
      cover_description,
      detail_description,
      course_price,
      course_category,
      course_level,
      course_language,
      target_audience
    } = req.body;

 const values=[t_id,course_title,cover_description,course_price,course_image,course_video,course_duration,course_level,course_language,about_yourself,detail_description,target_audience,course_category]
console.log(values);
  const sql="INSERT INTO courses(Teacher_id,title,description,price,image,overview,duration,courselevel,language,aboutyourself,detaildescription,targetaudience,category) VALUES(?)";
  con.query(sql,[values],(err,result)=>{
    if(err){
      return(
      res.json({
        message:"error in inserting the data",

      }))
        }
        else{
          console.log(result);
          return (
        res.json({
          message:"success in inserting data",
          status:true,
        })
      )
        }
    }
  )
}
)

router.get('/try', authenticateToken,(req,res)=>{
  
  return res.json({id:req.accessid.id});
})
//to generate a random 16 bytes code in terminan
//node 
//require('crypto' ).randomBytes(64).toString('hex')
router.post("/userinfo",authenticateToken,(req,res)=>{
  const sql="SELECT * FROM user WHERE uid = ?"
  console.log(req);
  con.query(sql,[req.accessid.id],(err,result)=>{
    if(err){
      res.json({msg:"error"})
    }
    if(result){
      const user=result[0];
      return (
        res.json({
        imagepath:user.Image,
        email:user.email,
        usertype:user.usertype,
        username:user.username,
        uid:user.uid,
        })
      )
    }
  })
})

router.post("/login", function (req, res) {
  const sql = "SELECT * FROM user WHERE email = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err){
      console.log("unsuccess in sql");
      return res.json({ Error: "Login error in server" });
    } 
    if (result.length === 0) {
      console.log("user not found");
      
      return res.json({ accountError: "User not found" });
    }
    const user=result[0];
    const resimage = user.Image.replace(/\\/g, '/');   /*casuse backend le  "imagepath": "public\\images\\1717823522836--Screenshot (69).png"
                                                         esto format ma pathairathyo ..frontend ma chai fornt slash chai rathyo*/ 
    bcrypt.compare( req.body.password.toString(),user.password,(err, passwordMatch) => {
        if (err) return res.json({ Error: "Login error in server" });
        if (passwordMatch) {
          const accessid={id:user.uid}
          const accessToken=jwt.sign(accessid,process.env.Acess_token )
          console.log("success");
          return res.json({
            message: "Login success",
            success: true,
            imagepath:resimage,
            email:user.email,
            usertype:user.usertype,
            username:user.username,
            uid:user.uid,
            accessToken:accessToken,
          });
        }
         else {
          console.log("p incorrect");
          return res.json({ passwordError: "incorrect password" });
        }
      }
    );
  });
});

//middleware for the authentication
function authenticateToken(req,res,next){
  const authHeader=req.headers['authorization'];
  console.log(authHeader);
  const token=authHeader&& authHeader.split(' ')[1]   //authHeader.split(' ') will produce the array ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"].
  if(token== null ) return res.sendStatus(401)
    jwt.verify(token,process.env.Acess_token,(err,accessid)=>{  //accessid chai login huda token ma attach vako token object(which got decoded)
  if(err) return res.sendStatus(403)
    req.accessid=accessid          //verified vayo vani chai  accessid attach gardini to therequested acessid object
  next()
  })
}


/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('hello')
});

router.get('/hello', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('hi')
});
router.get('/check', function (req, res, next) {
  res.render('hey', { name: "suyog" });
}
)
module.exports = router;
