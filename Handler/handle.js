const {StudentDB}=require("../model/student");

async function handleGet(req,res)
{
    const id=req.params.id;
    console.log(id);
    const stud=await StudentDB.findOne({
        studentRoll:id
    });
    if(stud!=null)
    {
        res.status(200).json(stud);
    }
    else
    {
    res.status(404).json({
        "message":"404 Not found"
    });
    }

}

async function handlegetall(req,res)
{
    await StudentDB.find().then((stud=>{
            res.status(200).json(stud);
        })).catch(()=>{
            res.status(400).send("No entry in DB");
        });

    const stud=await StudentDB.find();

    if(stud !=null)
    {
        res.status(200).json(stud)
    }
    else
    {
        res.status(404).json({
            "message":"No entry in DB"
        })
    }
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
            res.status(201).json({
                "message":"New entry added in DB"
            });
    }).catch(async ()=>{

        const st= await StudentDB.findOne({
            studentRoll:req.body.studentRoll
        });

        if(st!=null)
        {
            res.status(409).json({
                "message":"Roll number already exists"
            })
        }
        else{
            res.status(400).json({
                "message":"Failed to add entry in DB"
            })
        }
    });
}

async function handleUpdate(req,res)
{
    const id =req.params.id;
    await StudentDB.findOneAndUpdate({studentRoll:id},{studentName:req.body.studentName} 
    ).then((stud)=>{
        
        if(stud!=null)
        {
            console.log("Entry updated in DB");
            res.status(200).json({
            "message":"Entry updated in DB"
            })  
        }
        else{
            res.status(204).json({
                "message":"No entry found in DB"
            })
        }

        
    }).catch(()=>{
        console.log("Error in updating entry in DB");
        res.status(400).json(
            {
                "message":"Error in updating entry in DB"
            }
        );
    });
}

async function handleUpdateAll(req,res)
{
    const id =req.params.id;
    await StudentDB.findOneAndUpdate({studentRoll:id},
        {studentName:req.body.studentName, studentAge:req.body.studentAge, 
            studentBranch:req.body.studentBranch
        } 
    ).then((stud)=>{
        if(stud!=null)
        {
            console.log("Entry updated in DB");
            res.status(200).json({
                "message":"Entry updated in DB"
            })
        }
        else
        {
            res.status(204).json({
                "message":"No entry found in DB"
            })
        }
        
    }).catch(()=>{
        console.log("Error in updating entry in DB");
        res.status(400).json({
            "message":"Error in updating entry in DB"
        });
    });
}

async function handleDelete(req,res)
{
    const id =req.params.id;
    await StudentDB.findOneAndDelete({studentRoll:id}).
        then((stud)=>{
            if(stud!=null)
            {
                console.log("Entry deleted in DB");
                res.status(200).json({
                    "message":"Entry deleted in DB"
                })
            }
            else
            {
                res.status(202).json({
                    "message":"No entry found in DB"
                })
            }
            
        }).catch(()=>{
            console.log("Error in deleting entry in DB");
            res.status(400).json({
                "message":"Error in deleting entry in DB"
            });
        });
}



module.exports={handleGet,handlegetall,handleCreate,handleUpdate,handleDelete,handleUpdateAll};

