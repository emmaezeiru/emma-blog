import { useState } from "react";


const Home = () => {
    const [blogs, setBlog] = useState([
      { title: 'My old website', body: 'i want to change my website', author: 'emma', id: 1 },
      { title: 'My new website', body: 'this is better than my new website', author: 'saint', id: 2 },
      { title: 'My current website', body: 'i like this new website', author: 'buike', id: 3 }
    ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={ blog.id }>
          <h2>{ blog.title }</h2>
          <p>writtten by { blog.author }</p>
        </div>
      ))}
    </div>
  )
}

export default Home