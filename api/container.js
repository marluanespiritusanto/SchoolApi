const { asClass, createContainer, asFunction, asValue } = require("awilix");

const StartUp = require("./startup");
const Server = require("./server");
const Routes = require("../api/routes");

const { UserController } = require("../api/controllers");
const { UserService } = require("../services");
const { UserRepository } = require("../dal/repositories");
const UserRoutes = require("../api/routes/user.routes");

const config = require("../config/environments");
const container = createContainer();

const db = require("../dal/entities");

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    UserController: asClass(UserController).singleton()
  })
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton()
  })
  .register({
    UserService: asClass(UserService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton()
  });

module.exports = container;
