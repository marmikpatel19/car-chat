import Axios from "axios";
import React, { useState } from "react";

function AdminForm(props) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("topic", topic);
    data.append("description", description);
    setTitle("");
    setTopic("");
    setDescription("");
    const newPost = await Axios.post("/api/create-post", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    props.setPosts((prev) => prev.concat([newPost.data]));
  }

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
