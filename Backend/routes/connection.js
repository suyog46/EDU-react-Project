const mysql=require("mysql");
const dotenv=require("dotenv");
dotenv.config();
var con = mysql.createConnection({
    
    host: process.env.host,
    user: process.env.user,        // Garni chai esari  feri..paxi host garni bela ma arule thapaunu vayena ni ta 
    password: process.env.password,
    database: process.env.database,
    port: process.env.mySqlPort
})
con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("connected");
    }
})
module.exports=con;