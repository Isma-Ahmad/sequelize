const express = require("express");
const userController = require("./controller/user_controller.js");
const blogController = require("./controller/blog_controller.js");

const router = express.Router();

// ----------User Routes--------
router.get("/users", userController.getUser);
router.get("/users/:id", userController.getUserById);
router.get("/users/:users_id/blogs", userController.getBlogByUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// ----------Blog Routes---------
router.get("/blogs", blogController.getBlog);
router.get("/blogs/:id", blogController.getBlogById);
router.get("/blogs/user/:users_id", blogController.getBlogByUser);
router.post("/blogs", blogController.createBlog);
router.put("/blogs/:id", blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;