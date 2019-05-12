const BaseRepository = require("./base.repository");

class StudentRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Student");
  }
}

module.exports = StudentRepository;
