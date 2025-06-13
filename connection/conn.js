const mongo = require("mongoose");


function connectDB()
{

     mongo.connect("mongodb://localhost:27017/Mydb").then(()=>{
     console.log("connected to database");
 })

}

module.exports=connectDB;  //exporting the function to use it in other files.  //