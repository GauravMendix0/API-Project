const express=require("express");
const {StudentDB}=require("../model/student");
const {handleGet,handlegetall,handleCreate,handleUpdate,handleDelete,handleUpdateAll}=require("../Handler/handle")

const route=express.Router();

route.get("/",handleGet);

route.get("/getall",handlegetall);

route.post("/create",handleCreate);

route.patch("/update",handleUpdate);

route.put("/updateall", handleUpdateAll);

route.delete("/delete",handleDelete);


module.exports=route;