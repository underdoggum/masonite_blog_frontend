import { Link, useParams } from "react-router-dom";


const SingleBlogPost = ({ blogPosts, edit, deleteBlogPost }) => {
  const params = useParams();
  const id = parseInt(params.id);
  const blogPost = blogPosts.find(p => p.id === id);



  //////////////////////////////////////////////////
  // Styles
  //////////////////////////////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto"
  }

  return (
    <div style={div}>
      <h1>{blogPost.title}</h1>
      <h2>{blogPost.body}</h2>
      <button onClick={() => edit(blogPost)}>Edit</button>
      <button onClick={() => deleteBlogPost(blogPost)}>DELETE</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  )
}


export default SingleBlogPost;
