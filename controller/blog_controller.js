const BlogService = require("../services/blog_services.js");

class BlogController {
  constructor() {
    this.blogService = new BlogService();
    this.createBlog = this.createBlog.bind(this);
    this.getBlog = this.getBlog.bind(this);
    this.getBlogByUser = this.getBlogByUser.bind(this);
    this.getBlogById = this.getBlogById.bind(this);
    this.updateBlog = this.updateBlog.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);

  }

  async getBlog(req, res) {
    const data = await this.blogService.getBlog();
    res.json(data);
  }

  async getBlogByUser(req, res) {
    const { users_id } = req.params;
    const data = await this.blogService.getBlogByUser(users_id);
    res.json(data);
  }

  async getBlogById(req, res) {
    const { id } = req.params;
    const data = await this.blogService.getBlogById(id);
    res.json(data);
  }

  async createBlog(req, res) {
    const {users_id, title, content } = req.body;
    await this.blogService.createBlog(users_id,title, content);
    res.json("Blog added successfully..!");
  }

  async updateBlog(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;
    await this.blogService.updateBlog(id, title, content);
    res.json("Blog updated successfully..!!");
  }

  async deleteBlog(req, res) {
    const { id } = req.params;
    await this.blogService.deleteBlog(id);
    res.send("Blog delete successfully..!!");
  }
}

module.exports = new BlogController();