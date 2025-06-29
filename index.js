const express=require("express");
const {StudentDB}=require("./model/student");
const connectDB=require("./connection/conn");
const yaml=require("yaml");
const {swaggerSpec,swaggerUi}=require("./swagger")
const fs=require("fs");

const route=require("./Routes/route");

const app=express();
app.use(express.json());

connectDB();

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));


app.use("/api/v1/students",route);

const yamlfile = yaml.stringify(swaggerSpec);
fs.writeFileSync("swagger-output.yaml",yamlfile);


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});