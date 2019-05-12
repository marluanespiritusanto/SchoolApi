const BaseService = require("./base.service");
class StudentService extends BaseService {
  constructor({ StudentBusiness }) {
    super(StudentBusiness);
  }
}

module.exports = StudentService;
