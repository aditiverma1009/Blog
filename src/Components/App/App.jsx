import React, { useState } from 'react';
import blogImage from '../../assets/rectangle.png';
import BlogCard from '../BlogCard/BlogCard';
import HomePage from '../HomePage/HomePage';
import './App.scss';

function App() {
  const [allBlogs, setAllBlogs] = useState([]);

  const onFormSubmit = (event, content) => {
    const { title, desc, imageURL } = content;
    event.preventDefault();
    setAllBlogs([...allBlogs, {
      title,
      imageURL,
      imageAlt: title,
      content: desc,
    }]);
  };

  const deleteBlog = (id) => {
    const formattedBlog = allBlogs.filter((item, index) => (index !== id));
    setAllBlogs(formattedBlog);
  };

  const blogList = allBlogs.map((eachBlog, index) => (
    <BlogCard
      details={eachBlog}
      id={index}
      deleteBlog={(id) => deleteBlog(id)}
    />
  ));
  return (
    <div className="app">
      <HomePage
        onFormSubmit={(event, content) => onFormSubmit(event, content)}
        blogList={blogList}
        blogImage={blogImage}
      />
    </div>
  );
}

export default App;
