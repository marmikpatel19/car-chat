import Axios from "axios";
import React, { useState } from "react";

function Post(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftTopic, setDraftTopic] = useState("");
  const [draftDescription, setDraftDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);

    Axios.put(`http://localhost:8000/api/posts/update-post/${props.id}`, {
      draftTitle: draftTitle,
      draftTopic: draftTopic,
      draftDescription: draftDescription,
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        {!isEditing && (
          <>
            <h4>{props.title}</h4>
            <p className="text-muted small">{props.topic}</p>
            <p className="text-muted small">{props.description}</p>
            {!props.readOnly && (
              <>
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setDraftTitle(props.title);
                    setDraftTopic(props.topic);
                    setDraftDescription(props.description);
                  }}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </button>{" "}
                <button
                  onClick={async () => {
                    const test = Axios.delete(
                      `http://localhost:8000/api/posts/${props.id}`
                    );
                    props.setPosts((prev) => {
                      return prev.filter((post) => {
                        return post._id !== props.id;
                      });
                    });
                  }}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </>
            )}
          </>
        )}
        {isEditing && (
          <form onSubmit={submitHandler}>
            <div className="mb-1">
              <input
                autoFocus
                onChange={(e) => setDraftTitle(e.target.value)}
                type="text"
                className="form-control form-control-sm"
                value={draftTitle}
              />
            </div>
            <div className="mb-2">
              <input
                onChange={(e) => setDraftTopic(e.target.value)}
                type="text"
                className="form-control form-control-sm"
                value={draftTopic}
              />
            </div>
            <div className="mb-2">
              <input
                onChange={(e) => setDraftDescription(e.target.value)}
                type="text"
                className="form-control form-control-sm"
                value={draftDescription}
              />
            </div>
            <button className="btn btn-sm btn-success">Save</button>{" "}
            <button
              onClick={() => setIsEditing(false)}
              className="btn btn-sm btn-outline-secondary"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Post;
