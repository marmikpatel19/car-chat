import React, { useState, useEffect } from "react";
import Post from "./components/post";
import Axios from "axios";
import AdminForm from "./components/adminForm";
import "./styling/app.css";

function App() {
  const [posts, setPosts] = useState([]);

  // Providing an empty array ensures that this request only runs once
  useEffect(() => {
    async function getData() {
      const response = await Axios.get("http://localhost:8000/api/posts/posts");
      setPosts(response.data);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <p>
        <a href="/api/posts">&laquo; Back to public homepage</a>
      </p>
      <AdminForm setPosts={setPosts} posts={posts} />
      <div className="post-grid">
        {posts.map(function (post) {
          return (
            <Post
              key={post.post_id}
              title={post.title}
              topic={post.topic}
              description={post.description}
              date={post.date}
              setPosts={setPosts}
              id={post.post_id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
