const express=require("express");
const {StudentDB}=require("./model/student");
const connectDB=require("./connection/conn");

const route=require("./Routes/route");

const app=express();
app.use(express.json());

connectDB();


app.get("/",route);
app.get("/getall",route);
app.post("/create",route);
app.patch("/update",route);
app.delete("/delete",route);
app.put("/updateall", route);


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});