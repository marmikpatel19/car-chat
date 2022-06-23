import Axios from "axios";
import React, { useState } from "react";

function AdminForm(props) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/api/create-post", {
      title,
      topic,
      description,
    });
  };

  return (
    <form
      className="p-3 bg-success bg-opacity-25 mb-5"
      onSubmit={submitHandler}
    >
      <div className="mb-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="form-control"
          placeholder="Post title"
        />
      </div>
      <div className="mb-2">
        <input
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
          type="text"
          className="form-control"
          placeholder="Topic"
        />
      </div>
      <div className="mb-2">
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          className="form-control"
          placeholder="Description"
        />
      </div>

      <button className="btn btn-success">Create New Post</button>
    </form>
  );
}

export default AdminForm;
