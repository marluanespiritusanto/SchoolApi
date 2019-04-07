module.exports = {
  toDbEntity(user) {
    const { id, name, lastname } = user;
    return { id, name, lastname };
  }
};
