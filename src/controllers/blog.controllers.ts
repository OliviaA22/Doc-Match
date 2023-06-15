import { Request, Response } from "express";

import BlogService from "../services/blog";

class BlogController {
  /**
   * create  a new blog post
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async create(req: Request, res: Response, next: any) {
    try {
      const service = new BlogService();
      const blog = await service.create(req.sanitizedData, req.user._id);
      res.status(201).json(blog);
    } catch (error) {
      next(error);
    }
  }

  /**
   * get all new blog post
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async get(req: Request, res: Response, next: any) {
    try {
      let limit: number = 20;
      let skip: number = 0;

      if (req.query.limit) {
        limit = Number(req.query.limit);
      }
      if (req.query.skip) {
        skip = Number(req.query.limit);
      }

      const service = new BlogService();
      const blog = await service.get(limit, skip);
      res.status(200).json(blog);
    } catch (error) {
      next(error);
    }
  }

  /**
   * get blog post by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async getById(req: Request, res: Response, next: any) {
    try {
      const service = new BlogService();
      const blog = await service.getById(req.params.id);
      res.status(200).json(blog);
    } catch (error) {
      next(error);
    }
  }

  /**
   * update blog post by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async updateBlogById(req: Request, res: Response, next: any) {
    try {
      const service = new BlogService();
      const blog = await service.update(req.params.id, req.sanitizedData);
      res.status(200).json(blog);
    } catch (error) {
      next(error);
    }
  }

  /**
   * delete blog post by id
   * @param req The http request
   * @param res The http response
   * @returns
   */
  async delete(req: Request, res: Response, next: any) {
    try {
      const service = new BlogService();
      const blog = await service.delete(req.params.id);
      res.status(200).json(blog);
    } catch (error) {
      next(error);
    }
  }
}

export default new BlogController();
