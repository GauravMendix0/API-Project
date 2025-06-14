const express=require("express");
const {StudentDB}=require("./model/student");
const connectDB=require("./connection/conn");
const yaml=require("yaml");
const {swaggerSpec,swaggerUi}=require("./swagger1")
const fs=require("fs");

const route=require("./Routes/route");

const app=express();
app.use(express.json());

connectDB();

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));


app.use("/",route);

const yamlfile = yaml.stringify(swaggerSpec);
fs.writeFileSync("swagger-op.yaml",yamlfile);


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});