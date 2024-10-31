import React, { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  // This is a function that is used to delete a blog
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  // This is a useEffect hook that is used to run the code inside the function whenever the blogs state changes
  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return (
    <div className="home">
      {/* This is a JSX expression that displays the blogs */}
      <BlogList blogs={blogs} title="Display All!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;