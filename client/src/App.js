import React, { useState, useEffect } from "react";
import Post from "./components/post";
import Axios from "axios";
import AdminForm from "./components/adminForm";
import "./styling/app.css";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="container">
      <p>
        <a href="/api/posts">&laquo; Back to public homepage</a>
      </p>
      <AdminForm setPosts={setPosts} />
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
