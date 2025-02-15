import React, { useState } from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import MediaUploader from "../Media/MediaUploader/MediaUploader";
import { PostContainer } from "./Post.styles";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface BlogPostProps {
  author?: string;
  dateAuthored?: Date | null;
  dateUpdated?: Date;
  content?: string;
}

const Post: React.FC<BlogPostProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handlePublish = async (): Promise<void> => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required!");
      return;
    }

    const postData = { title, author, content };

    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Failed to publish post");
      }

      const data = await response.json();

      setAuthor(data.user.userName);

      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  return (
    <PostContainer>
      <MediaUploader />
      <input
        type="text"
        className="title"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      {author && <h2 className="author">Written by: {author}</h2>}
      <RichTextEditor
        value={content || ""}
        onChange={(value) => {
          setContent(value);
        }}
      />
      <button onClick={handlePublish} className="publish-button">
        Publish
      </button>
    </PostContainer>
  );
};

export default Post;
