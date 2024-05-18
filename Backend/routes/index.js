var express = require('express');
var router = express.Router();
const cors = require('cors');
const con = require("./connection"); //page ko nam...ani uta bata k aauxa chai ..uta k export garexa tes ma var parxa
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
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



router.post("/signup", (req, res) => {
  console.log(req.body)
  const name = req.body.uname;
  const email = req.body.email;
  const userType = req.body.userType;

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing password" });

    const values = [name, email, hash];
    const insertUserQuery = "INSERT INTO user (username, email, password) VALUES (?)";
    con.query(insertUserQuery, [values], function (err, result) {
      if (err) return res.json({ Error: "Error inserting data" });
      return res.json({ message: "User successfully registered", success: true });

    });

  });


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
    bcrypt.compare( req.body.password.toString(),result[0].password,(err, passwordMatch) => {
        if (err) return res.json({ Error: "Login error in server" });
        if (passwordMatch) {
          console.log("success");
          return res.json({
            message: "Login success",
            success: true,
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
