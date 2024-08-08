const BlogList = ({blogs, title, handleDelete}) => {


  return (
    <div className="home">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={ blog.id }>
          <h2>{ blog.title }</h2>
          <p>writtten by { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Button</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList