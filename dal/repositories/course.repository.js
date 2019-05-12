const BaseRepository = require("./base.repository");

class CourseRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Course");
  }
}

module.exports = CourseRepository;
