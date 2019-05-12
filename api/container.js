const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const StudentRoutes = require("../api/routes/student.routes");
const TeacherRoutes = require("../api/routes/teacher.routes");
const CourseRoutes = require("../api/routes/course.routes");

// business
const { StudentBusiness, TeacherBusiness, CourseBusiness } = require("../domain/");

// controllers
const { StudentController, TeacherController, CourseController } = require("../api/controllers");

// services
const { StudentService, TeacherService, CourseService } = require("../services");

// repositories
const { StudentRepository, TeacherRepository, CourseRepository } = require("../dal/repositories");

// db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    StudentController: asClass(StudentController).singleton(),
    StudentRoutes: asFunction(StudentRoutes).singleton(),
    TeacherController: asClass(TeacherController).singleton(),
    TeacherRoutes: asFunction(TeacherRoutes).singleton(),
    CourseController: asClass(CourseController).singleton(),
    CourseRoutes: asFunction(CourseRoutes).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton(),
    CourseService: asClass(CourseService).singleton()
  })
  .register({
    StudentRepository: asClass(StudentRepository).singleton(),
    TeacherRepository: asClass(TeacherRepository).singleton(),
    CourseRepository: asClass(CourseRepository).singleton()
  })
  .register({
    StudentBusiness: asClass(StudentBusiness).singleton(),
    TeacherBusiness: asClass(TeacherBusiness).singleton(),
    CourseBusiness: asClass(CourseBusiness).singleton()
  });

module.exports = container;
