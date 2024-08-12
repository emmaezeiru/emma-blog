import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok){
            throw Error ('there is an error with the data');
          }
          return res.json();
        })
        .then(data => {
          setBlog(data)
          setisLoading(false)
          setError(false)
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message)
          setisLoading(false)
        })
    }, [])

  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isLoading && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  )
}

export default Home