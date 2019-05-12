const BaseService = require("./base.service");
class TeacherService extends BaseService {
  constructor({ TeacherBusiness }) {
    super(TeacherBusiness);
  }
}

module.exports = TeacherService;
