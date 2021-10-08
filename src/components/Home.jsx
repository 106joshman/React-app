// import './Home.css';
import { useState } from 'react';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new react app', body: 'Lorem ipsum....', author: 'Dev-Guy', id: 1},
        { title: 'My React music player', body: 'Lorem ipsum....', author: 'Joshua', id: 2},
        { title: 'Cool tips to learning Web dev', body: 'Lorem ipsum....', author: 'Dev-Guy', id: 3}
    ]);
    
    return (
        <div className="home">
            <h1>This is the HOME PAGE</h1>
                {blogs.map((blog) => (
                    <div className="blog-prev" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by: { blog.author }</p>
                    </div>
                ))}
        </div>
    );
}
 
export default Home;