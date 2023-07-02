import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPostType {
  _id: string;
  title: string;
  body: string;
}

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/v1/blog")
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong while fetching the blogs");
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
