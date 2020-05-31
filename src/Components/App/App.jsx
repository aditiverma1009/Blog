import React, { useState } from 'react';
import blogImage from '../../assets/rectangle.png';
import { MemoizedBlogCard as BlogCard } from '../BlogCard/BlogCard';
import HomePage from '../HomePage/HomePage';
import './App.scss';

export const MyContext = React.createContext();

const App = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const onFormSubmit = (event, content) => {
        const { title, desc, imageURL } = content;
        event.preventDefault();
        setAllBlogs([
            ...allBlogs,
            {
                title,
                imageURL,
                imageAlt: title,
                content: desc,
            },
        ]);
    };

    const deleteBlog = id => {
        const formattedBlog = allBlogs.filter((item, index) => index !== id);
        setAllBlogs(formattedBlog);
    };

    const blogList = allBlogs.map((eachBlog, index) => (
        <BlogCard
            details={eachBlog}
            id={index}
            deleteBlog={id => deleteBlog(id)}
            key={index}
        />
    ));
    return (
        <div className="app">
            <MyContext.Provider value={'Enter Value below and then press tab'}>
                <HomePage
                    onFormSubmit={(event, content) =>
                        onFormSubmit(event, content)
                    }
                    blogList={blogList}
                    blogImage={blogImage}
                />
            </MyContext.Provider>
        </div>
    );
};

export default App;
