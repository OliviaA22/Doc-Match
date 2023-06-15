import Blog, { IBlog } from "../models/blog.model";
import * as mongoose from "mongoose";
import User from "../models/user.model";

class BlogService {
  async create(data: IBlog, userId: any) {
    const blog = await Blog.create({
      ...data,
      userId,
    });
    return blog;
  }

  async get(limit = 20, skip = 0) {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    return blogs;
  }

  async getById(id: string) {
    const blog = await Blog.findById(id);
    return blog;
  }

  async update(id: string, data: IBlog) {
    const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedBlog;
  }

  async delete(id: string) {
    const deletedBlog = await Blog.deleteOne({ _id: id });
    return deletedBlog;
  }
}

export default BlogService;
