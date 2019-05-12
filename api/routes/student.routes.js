const { Router } = require("express");

module.exports = function({ StudentController }) {
  const router = Router();

  router.get("/", StudentController.getStudents.bind(StudentController));
  router.get("/:id", StudentController.getStudent.bind(StudentController));
  router.post("/", StudentController.createStudent.bind(StudentController));
  router.put("/:id", StudentController.updateStudent.bind(StudentController));
  router.delete("/:id", StudentController.deleteStudent.bind(StudentController));

  return router;
};
