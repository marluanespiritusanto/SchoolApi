const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const UserRoutes = require("../api/routes/user.routes");

// business
const { UserBusiness } = require("../domain/");

// controllers
const { UserController } = require("../api/controllers");

// services
const { UserService } = require("../services");

// repositories
const { UserRepository } = require("../dal/repositories");

// db
const db = require("../dal/entities");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    UserController: asClass(UserController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    db: asValue(db)
  })
  .register({
    UserService: asClass(UserService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton()
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton()
  });

module.exports = container;
