const { User, Blog } = require("../models");

class UserService {
  async getUser() {
    return await User.findAll();
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async getBlogByUser(userId) {
    return await Blog.findAll({
      where: { users_id: userId },
    });
  }

  async createUser(name) {
    return await User.create({ name });
  }

  async updateUser(id, name) {
    return await User.update(
      { name },
      {
        where: { id },
      }
    );
  }

  async deleteUser(id) {
    return await User.destroy({
      where: { id },
    });
  }
}

module.exports = UserService;