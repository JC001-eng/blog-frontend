import React from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import MediaUploader from "../Media/MediaUploader/MediaUploader";
import { PostContainer } from "./Post.styles";

interface BlogPostProps {
  author?: string;
  dateAuthored?: Date | null;
  dateUpdated?: Date;
  content?: string;
}

const Post: React.FC<BlogPostProps> = ({ author, content }) => {
  return (
    <PostContainer>
      <MediaUploader />
      <input type="text" className="title" placeholder="Title" />
      {author && <h2 className="author">{author}</h2>}
      <RichTextEditor
        value={content || ""}
        onChange={() => {
          handleInputChange;
        }}
      />
    </PostContainer>
  );
};

export default Post;
