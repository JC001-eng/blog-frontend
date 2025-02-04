import React from "react";

interface BlogPostProps {
  title?: string;
  author?: string;
  dateAuthored?: Date;
  dateUpdated?: Date;
  content?: string;
}

const Post: React.FC<BlogPostProps> = ({
  title,
  author,
  dateAuthored,
  dateUpdated,
  content,
}) => {
  return (
    <div>
      <div className="image-wrapper">
        <img src="" alt="" />
      </div>
      {title && <h2 className="title">{title}</h2>}
      {author && <h2 className="author">{author}</h2>}
      {dateAuthored && <h2 className="dateAuthored">{dateAuthored}</h2>}
      {dateUpdated && <h2 className="dateUpdated">{dateUpdated}</h2>}
      {author && <h2 className="author">{author}</h2>}
      {content && <p>{content}</p>}
    </div>
  );
};

export default Post;
