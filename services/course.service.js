const BaseService = require("./base.service");
class CourseService extends BaseService {
  constructor({ CourseBusiness }) {
    super(CourseBusiness);
  }
}

module.exports = CourseService;
