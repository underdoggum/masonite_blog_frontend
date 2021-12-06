import { Link } from "react-router-dom";


const BlogPost = ({ blogPost }) => {
  //////////////////////////////////////////////////
  // Style Objects
  //////////////////////////////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%"
  };

  return (
    <div style={div}>
      <Link to={`/blogPost/${blogPost.id}`}>
        <h1>{blogPost.title}</h1>
      </Link>
      <h2>{blogPost.body}</h2>
    </div>
  )
}


export default BlogPost;
