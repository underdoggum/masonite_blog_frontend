import { useState } from "react";
import { useNavigate } from "react-router";


const Form = ({ initialBlogPost, handleSubmit, buttonLabel }) => {

  const navigate = useNavigate();

  //////////////////////////////////////////////////
  // The Form Data State
  //////////////////////////////////////////////////
  const [formData, setFormData] = useState(initialBlogPost);


  //////////////////////////////////////////////////
  // Functions
  //////////////////////////////////////////////////
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmission = event => {
    event.preventDefault();
    handleSubmit(formData);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.body}
        name="body"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  )
}


export default Form;
