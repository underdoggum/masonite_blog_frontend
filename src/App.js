import AllBlogPosts from "./pages/AllBlogPosts";
import SingleBlogPost from "./pages/SingleBlogPost";
import Form from "./pages/Form";
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();  

  //////////////////////////////////////////////////
  // Style Objects
  //////////////////////////////////////////////////
  const h1 = {
    textAlign: "center",
    margin: "10px"
  }

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto"
  }


  //////////////////////////////////////////////////
  // State and other variables
  //////////////////////////////////////////////////
  const url = "https://masonite-blog.herokuapp.com/blogs/";

  const [blogPosts, setBlogPosts] = useState([]);

  const nullBlogPost = {
    title: "",
    body: ""
  }

  const [targetBlogPost, setTargetBlogPost] = useState(nullBlogPost);


  //////////////////////////////////////////////////
  // Functions
  //////////////////////////////////////////////////
  const getBlogPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBlogPosts(data);
  }

  const addBlogPosts = async newBlogPost => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlogPost),
    })
    getBlogPosts();
  }

  const getTargetTodo = async blogPost => {
    setTargetBlogPost(blogPost);
    navigate("/edit");
  }

  const updateBlogPost = async blogPost => {
    const reponse = await fetch(url + blogPost.id, {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blogPost)
    })
    getBlogPosts();
  }

  const deleteBlogPost = async blogPost => {
    const response = await fetch(url + blogPost.id, {
      method: "delete"
    })
    getBlogPosts();
    navigate("/");
  }


  //////////////////////////////////////////////////
  // useEffects
  //////////////////////////////////////////////////
  useEffect(() => {
    getBlogPosts();
  }, [])


  //////////////////////////////////////////////////
  // Returned JSX
  //////////////////////////////////////////////////
  return (
    <div className="App">
      <h1 style={h1}>My Blogs</h1>
      <Link to="/new"><button style={button}>Create New Todo</button></Link>
      <Routes>
        <Route path="/" element={<AllBlogPosts blogPosts={blogPosts} />} />
        <Route path="/blogpost/:id" element={
          <SingleBlogPost
            blogPosts={blogPosts}
            edit={getTargetTodo}
            deleteBlogPost={deleteBlogPost}
          />}
        />
        <Route path="/new" element={
          <Form
            initialBlogPost={nullBlogPost}
            handleSubmit={addBlogPosts}
            buttonLabel="Post!"
          />}
        />
        <Route path="/edit" element={
          <Form
            initialBlogPost={targetBlogPost}  
            handleSubmit={updateBlogPost}
            buttonLabel="Update Post!"
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
