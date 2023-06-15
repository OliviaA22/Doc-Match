import { Request, Response } from "express";
import BlogService from "../services/blog";

export const isUserOwnerGuard = async (
  req: Request,
  res: Response,
  next: any
) => {
  try {
    const user = req.user;
    const blogService = new BlogService();
    const blog = await blogService.getById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "blog not found" });
    }
    if (String(blog?.userId) !== String(user._id)) {
      return res.status(401).json({ success: false, message: "Access Denied" });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
