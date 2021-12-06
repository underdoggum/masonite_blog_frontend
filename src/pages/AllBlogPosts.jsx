import BlogPost from "../components/BlogPost";


const AllBlogPosts = ({ blogPosts }) => {

  return (
    blogPosts.map(blogPost => {
      return <BlogPost blogPost={blogPost} key={blogPost.id} />
    })
  )
}


export default AllBlogPosts;
