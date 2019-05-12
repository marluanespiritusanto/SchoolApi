const BaseBusiness = require("./base.business");
const { Teacher } = require("./models");

class TeacherBusiness extends BaseBusiness {
  constructor({ TeacherRepository }) {
    super(TeacherRepository, Teacher);
  }
}

module.exports = TeacherBusiness;
