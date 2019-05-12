const BaseRepository = require("./base.repository");

class TeacherRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Teacher");
  }
}

module.exports = TeacherRepository;
