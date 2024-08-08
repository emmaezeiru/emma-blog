import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlog] = useState([
      { title: 'My old website', body: 'i want to change my website', author: 'emma', id: 1 },
      { title: 'what i will eat today', body: ' will eat rice, egg, meat', author: 'saint', id: 2 },
      { title: 'what workout will i do', body: 'reps of bench, pullups and sit ups', author: 'saint', id: 3 }
    ]);


  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
    </div>
  )
}

export default Home