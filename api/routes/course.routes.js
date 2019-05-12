const { Router } = require("express");

module.exports = function({ CourseController }) {
  const router = Router();

  router.get("/", CourseController.getCourses.bind(CourseController));
  router.get("/:id", CourseController.getCourse.bind(CourseController));
  router.post("/", CourseController.createCourse.bind(CourseController));
  router.put("/:id", CourseController.updateCourse.bind(CourseController));
  router.delete("/:id", CourseController.deleteCourse.bind(CourseController));

  return router;
};
