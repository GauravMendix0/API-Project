const {StudentDB}=require("../model/student");

async function handleGet(req,res)
{

    const stud=await StudentDB.findOne({
        studentRoll:1
    });
    if(stud!=null)
    {
        res.json(stud);
    }
    else
    {
    res.send("No entry in DB");
    }

}

async function handlegetall(req,res)
{
    await StudentDB.find().then((stud=>{
            res.status(200).json(stud);
        })).catch(()=>{
            res.status(500).send("No entry in DB");
        })
}

async function handleCreate(req,res)
{
    StudentDB.create({
        studentName:req.body.studentName,
        studentRoll:req.body.studentRoll,
        studentAge:req.body.studentAge,
        studentBranch:req.body.studentBranch
        }
    ).then((stud)=>{
            console.log("New entry added in DB"+ stud);
            res.status(200).send("new entry added in DB");
    }).catch(()=>{
        console.log("Error in adding entry in DB");
        res.status(400).send("Error");
    });
}

async function handleUpdate(req,res)
{
    await StudentDB.findOneAndUpdate({studentRoll:req.body.studentRoll},{studentName:req.body.studentName} 
    ).then(()=>{
        console.log("Entry updated in DB");
        res.status(200).send("Entry updated in DB");
    }).catch(()=>{
        console.log("Error in updating entry in DB");
        res.status(400).send("Error");
    });
}

async function handleUpdateAll(req,res)
{
    await StudentDB.findOneAndUpdate({studentRoll:req.body.studentRoll},
        {studentName:req.body.studentName, studentAge:req.body.studentAge, 
            studentBranch:req.body.studentBranch
        } 
    ).then(()=>{
        console.log("Entry updated in DB");
        res.status(200).send("Entry updated in DB");
    }).catch(()=>{
        console.log("Error in updating entry in DB");
        res.status(400).send("Error");
    });
}

async function handleDelete(req,res)
{
    await StudentDB.findOneAndDelete({studentRoll:req.body.studentRoll}).
        then(()=>{
            console.log("Entry deleted in DB");
            res.send("Entry deleted in DB");
        }).catch(()=>{
            console.log("Error in deleting entry in DB");
            res.send("Error occured");
        });
}



module.exports={handleGet,handlegetall,handleCreate,handleUpdate,handleDelete,handleUpdateAll};

