const BaseBusiness = require("./base.business");
const { Course } = require("./models");

class CourseBusiness extends BaseBusiness {
  constructor({ CourseRepository }) {
    super(CourseRepository, Course);
  }
}

module.exports = CourseBusiness;
