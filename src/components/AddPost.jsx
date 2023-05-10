import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddDataMutation } from "../services/ApiCalling";

export default function AddPost() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [addData, { isLoading }] = useAddDataMutation();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData(data);
    setData({
      title: "",
      description: "",
    });
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label> Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            value={data.title}
            onChange={handleChange}
            disabled={isLoading}
          />
          <label> Description</label>
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            value={data.description}
            onChange={handleChange}
            disabled={isLoading}
          />
        </fieldset>
        <button type="submit" disabled={isLoading}>
          Add Post
        </button>
      </form>
    </>
  );
}
