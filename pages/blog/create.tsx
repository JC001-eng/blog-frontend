import api from "../../services/api";
import withAuth from "../auth/withAuth";

import React from "react";

const CreatePost = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await api.post(
        "/posts",
        { post: { title, content } },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("Post created successfully!");
    } catch (error) {
      setMessage(error.response.data.error || "An error occurred");
    }
    return (
      <form onSubmit={handleCreatePost}>
        <h1>New Post</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        />
        <button type="submit">Create</button>
        {message && <p>{message}</p>}
      </form>
    );
  };
};

export default withAuth(CreatePost);
