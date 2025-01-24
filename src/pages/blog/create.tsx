import axios from "axios";
import api from "../../services/api";
import withAuth from "../auth/withAuth";

import React from "react";

const CreatePost: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const handleCreatePost = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      await api.post(
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
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.error || "An error occurred");
      }
    }
  };

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

export default withAuth(CreatePost);
