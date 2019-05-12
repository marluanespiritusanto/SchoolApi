const { Router } = require("express");

module.exports = function({ TeacherController }) {
  const router = Router();

  router.get("/", TeacherController.getTeachers.bind(TeacherController));
  router.get("/:id", TeacherController.getTeacher.bind(TeacherController));
  router.post("/", TeacherController.createTeacher.bind(TeacherController));
  router.put("/:id", TeacherController.updateTeacher.bind(TeacherController));
  router.delete("/:id", TeacherController.deleteTeacher.bind(TeacherController));

  return router;
};
