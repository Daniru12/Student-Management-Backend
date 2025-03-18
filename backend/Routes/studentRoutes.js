import express from "express"
import {createStudent,getAllStudents,getStudentById,updateStudent,deleteStudent} from "../Controller/studentController.js"

const studentRouter = express.Router();

studentRouter.post("/create",createStudent)
studentRouter.get("/",getAllStudents)
studentRouter.put("/update/:id",updateStudent)
studentRouter.delete("/delete/:id",deleteStudent)


export default studentRouter;