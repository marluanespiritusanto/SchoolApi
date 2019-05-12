const mapper = require("automapper-js");
const { CourseDto } = require("../dtos");

class CourseController {
  constructor({ CourseService }) {
    this._courseService = CourseService;
  }

  async getCourses(req, res) {
    let courses = await this._courseService.getAll();
    courses = courses.map(course => mapper(CourseDto, course));
    return res.send({
      payload: courses
    });
  }

  async getCourse(req, res) {
    const { id } = req.params;
    let course = await this._courseService.get(id);
    if (!course) {
      return res.status(404).send();
    }
    course = mapper(CourseDto, course);
    return res.send({
      payload: course
    });
  }

  async createCourse(req, res) {
    const { body } = req;
    const createdCourse = await this._courseService.create(body);
    const course = mapper(CourseDto, createdCourse);
    return res.status(201).send({
      payload: course
    });
  }

  async updateCourse(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._courseService.update(id, body);
    return res.status(204).send();
  }

  async deleteCourse(req, res) {
    const { id } = req.params;

    await this._courseService.delete(id);
    return res.status(204).send();
  }
}

module.exports = CourseController;
