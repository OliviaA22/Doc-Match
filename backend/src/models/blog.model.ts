import mongoose, { Document, Schema } from "mongoose";
import { z, ZodDate } from "zod";

export const BlogDTO = z.object({
  title: z.string(),
  body: z.string(),
});

export type IBlog = z.infer<typeof BlogDTO>;

const blogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      requred: true,
      ref: "User",
    },
  },

  { timestamps: true }
);

const Blog = mongoose.model<IBlog & { userId: mongoose.Types.ObjectId }>(
  "Blog",
  blogSchema
);

export default Blog;
