const BaseBusiness = require("./base.business");
const { Student } = require("./models");

class StudentBusiness extends BaseBusiness {
  constructor({ StudentRepository }) {
    super(StudentRepository, Student);
  }
}

module.exports = StudentBusiness;
