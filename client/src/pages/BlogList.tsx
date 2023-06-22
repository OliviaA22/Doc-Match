import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPostType {
  _id: string;
  title: string;
  body: string;
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogPostType[]>([]);

  useEffect(() => {
    fetch("/api/v1/blog")
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <Link to={`/blog/${blog._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
