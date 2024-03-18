var express = require('express');
var router= express.Router();
const cors= require('cors');
const con= require("./connection"); //page ko nam...ani uta bata k aauxa chai ..uta k export garexa tes ma var parxa
const bcrypt= require('bcrypt');
const dotenv=require('dotenv');
dotenv.config();

// const salt= process.env.salt;

const salt= 10;

router.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
  methods:["POST","GET","DELETE","PUT"],
  optionsSuccessStatus:200
})
)



router.post("/signup",(req,res)=>{
  console.log(req.body)
const name=req.body.uname;
const email=req.body.email;
const userType=req.body.userType;

bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
  if (err) return res.json({ Error: "Error hashing password" });

   const values = [name, email, hash];
  const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?)";
  con.query(insertUserQuery, [values], function (err, result) {
    if (err) return res.json({ Error: "Error inserting data" });
    return res.json({ message: "User successfully registered", success: true });

  });

});


})




router.get('/login', function(req, res, next) {

  const sql="SELECT * FROM users ";
  con.query(sql,values,(err,result)=>{              //3nta parameter use garda chai last ma function use garni jun le chai failure ra success linxa
    if(err){
        return res.json({Error:"there is  register error"})
    }
    else{
      return res.json({success:true});
    }
  })});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('hello')
});

router.get('/hello', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('hi')
});
router.get('/check',function(req,res,next){
res.render('hey',{name:"suyog"});
}
)
module.exports = router;
