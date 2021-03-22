const express = require("express");
const router = express.Router();

const students = require("../studentData");

router.get("/", (req, res) => {
  res.json(students);
});

router.get("/:studentId", (req, res) => {
  const { studentId } = req.params;
  const student = students.find((_student) => _student.id === +studentId);
  res.json(student);
});

module.exports = router;
