import Student from "../Model/student.js";

// Create a new student
export const createStudent = async (req, res) => {
    try {
        const { name, age, subject } = req.body;
        const newStudent = new Student({ name, age, subject });
        await newStudent.save();
        res.status(201).json({ message: "Student created successfully", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Error creating student", error: error.message });
    }
};

// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Error fetching students", error: error.message });
    }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: "Error fetching student", error: error.message });
    }
};

// Update a student by ID
export const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
        res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
    } catch (error) {
        res.status(500).json({ message: "Error updating student", error: error.message });
    }
};

// Delete a student by ID
export const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting student", error: error.message });
    }
};
