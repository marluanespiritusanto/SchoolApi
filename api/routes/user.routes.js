const { Router } = require("express");

module.exports = function({ UserController }) {
  const router = Router();

  router.get("/", UserController.getUsers.bind(UserController));
  router.get("/:id", UserController.getUser.bind(UserController));
  router.post("/", UserController.createUser.bind(UserController));
  router.put("/:id", UserController.updateUser.bind(UserController));
  router.delete("/:id", UserController.deleteUser.bind(UserController));

  return router;
};
