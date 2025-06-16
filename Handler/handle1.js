const { StudentDB } = require("../model/student");

async function handleGet(req, res) 
{
    const { id } = req.params;

    try {
        const student = await StudentDB.findOne(
            { 
                studentRoll: id 
            });

        if (student) 
        {
            return res.status(200).json(student);
        }

        res.status(404).json(
            { 
                message: "Student not found" 
            }
        );
    } catch (err) {
        res.status(500).json(
            { 
                message: "Internal server error", error: err
            }
        );
    }
}

async function handlegetall(req, res) 
{
    try 
    {
        const students = await StudentDB.find();

        res.status(200).json(students); 
    } 
    catch (err) 
    {
        res.status(500).json(
            { 
                message: "Internal server error", 
                error: err
            }
        );
    }
}

async function handleCreate(req, res) 
{
    const { studentName, studentRoll, studentAge, studentBranch } = req.body;

    if (!studentName || !studentRoll || !studentAge || !studentBranch) 
    {
        return res.status(400).json(
            { 
                message: "Missing required fields" 
            }
        );
    }

    try {
        const existing = await StudentDB.findOne({ studentRoll });

        if (existing) 
        {
            return res.status(409).json(
                { 
                    message: "Roll number already exists" 
                });
        }

        const newStudent = await StudentDB.create({ studentName, studentRoll, studentAge, studentBranch });

        res.status(201).json(
            { 
                message: "Student created", 
                student: newStudent 
            });
    } catch (err) 
    {
        res.status(500).json(
            { 
                message: "Internal server error", 
                error: err 
            }
        );
    }
}

async function handleUpdate(req, res) 
{
    const { id } = req.params;
    const { studentName } = req.body;
    console.log(id);
    if (!studentName) 
    {
        return res.status(400).json({ message: "Missing student name" });
    }

    try {
        const updated = await StudentDB.findOneAndUpdate(
            { studentRoll: id },
            { studentName }        
        );

        if (!updated) 
            {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(
            { 
                message: "Student name updated", 
                student: updated 
            });
    } 
    catch (err) {
        res.status(500).json(
            { message: "Internal server error", 
                error: err 
            }
        );
    }
}

async function handleUpdateAll(req, res) 
{
    const { id } = req.params;
    const { studentName, studentAge, studentBranch } = req.body;

    if (!studentName || !studentAge || !studentBranch) 
    {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const updated = await StudentDB.findOneAndUpdate(
            { studentRoll: id },
            { studentName, studentAge, studentBranch },
            { new: true }
        );

        if (!updated) 
        {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(
            { message: "Student record fully updated", 
                student: updated 
            }
        );
    } 
    catch (err) 
    {
        res.status(500).json(
            { 
                message: "Internal server error", 
                error: err.message 
            }
        );
    }
}

async function handleDelete(req, res) 
{
    const { id } = req.params;

    try 
    {
        const deleted = await StudentDB.findOneAndDelete({ studentRoll: id });

        if (!deleted) 
        {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(204).send(); 
    } 
    catch (err) 
    {
        res.status(500).json(
            {
             message: "Internal server error", 
            error: err.message 
        }
    );
    }
}

module.exports = {handleGet, handlegetall, handleCreate, handleUpdate, handleDelete, handleUpdateAll };
