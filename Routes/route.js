const express=require("express");
const {StudentDB}=require("../model/student");
const {handleGet,handlegetall,handleCreate,handleUpdate,handleDelete,handleUpdateAll}=require("../Handler/handle1")

const route=express.Router();

route.get("/:id",handleGet);

route.get("/",handlegetall);

route.post("/",handleCreate);

route.patch("/:id",handleUpdate);

route.put("/:id", handleUpdateAll);

route.delete("/:id",handleDelete);


module.exports=route;