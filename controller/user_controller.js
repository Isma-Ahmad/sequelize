const UserService = require("../services/user_services.js");

class UserController {
  constructor() {
    this.userService = new UserService();
    this.createUser = this.createUser.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.getBlogByUser = this.getBlogByUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async getUser(req, res) {
    const data = await this.userService.getUser();
    res.json(data);
  }

  async getBlogByUser(req, res) {
    const { users_id } = req.params;
    const data = await this.userService.getBlogByUser(users_id);
    res.json(data);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const data = await this.userService.getUserById(id);
    res.json(data);
  }

  async createUser(req, res) {
    const {name} = req.body;
    await this.userService.createUser(name);
    res.json("User added successfully..!!");
  }

  async updateUser(req, res) {
    const {id} = req.params;
    const {name} = req.body;
    await this.userService.updateUser(id, name);
    res.json("User updated successfully..!!");
  }

  async deleteUser(req, res) {
    const {id} = req.params;
    await this.userService.deleteUser(id);
    res.send("User data delete successfully..!!");
  }
}

module.exports = new UserController();