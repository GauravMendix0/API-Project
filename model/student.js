const mongo=require("mongoose");

const sch=new mongo.Schema(
    {
    studentName:{
        type:String,
        required:true
    },
    studentRoll:{
        type:Number,
        required:true,
        unique:true
    },
    studentAge:{
        type:Number,
        required:true
    },
    studentBranch:{
        type:String,
        required:true
    }
    
});


const StudentDB=mongo.model("StudenDB",sch);

module.exports={StudentDB};