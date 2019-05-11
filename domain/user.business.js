const mapper = require("automapper-js");
const { User } = require("./models");

class UserBusiness {
  constructor({ UserRepository }) {
    this._userRepository = UserRepository;
  }

  async getUsers() {
    const users = await this._userRepository.getUsers();
    return users.map(user => mapper(User, user.toJSON()));
  }

  async getUser(id) {
    const user = await this._userRepository.getUser(id);
    return mapper(User, user.toJSON());
  }

  async createUser(user) {
    user = mapper(User, user);
    const createdUser = await this._userRepository.createUser(user);
    return mapper(User, createdUser.toJSON());
  }

  async updateUser(id, user) {
    user.id = id;
    user = mapper(User, user);
    const updatedUser = await this._userRepository.updateUser(id, user);
    return mapper(User, updatedUser);
  }

  async deleteUser(id) {
    return await this._userRepository.deleteUser(id);
  }
}

module.exports = UserBusiness;
