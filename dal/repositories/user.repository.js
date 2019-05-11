class UserRepository {
  constructor({ db }) {
    this._db = db;
  }

  getUsers() {
    return this._db.users.findAll();
  }

  getUser(id) {
    return this._db.users.findOne({ where: { id } });
  }

  createUser(user) {
    return this._db.users.create(user);
  }

  updateUser(id, user) {
    return this._db.users.update(user, { where: { id } });
  }

  deleteUser(id) {
    return this._db.users.destroy({ where: { id } });
  }
}

module.exports = UserRepository;
