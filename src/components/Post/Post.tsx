import React from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import MediaUploader from "../Media/MediaUploader/MediaUploader";

interface BlogPostProps {
  title?: string;
  author?: string;
  dateAuthored?: Date | null;
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
  const [updatedContentDate, setUpdatedContentDate] = React.useState<Date>(
    dateUpdated || new Date()
  );

  // TODO: add logic for handleTextChange function
  const handleTextChange: () => void = () => {
    console.log("Text changed");

    if (dateUpdated) {
      const newDate = new Date();
      setUpdatedContentDate(newDate);
    }
  };

  return (
    <div>
      <MediaUploader />
      {title && <h2 className="title">{title}</h2>}
      {author && <h2 className="author">{author}</h2>}
      {dateAuthored && (
        <h2 className="dateAuthored">{dateAuthored.toDateString()}</h2>
      )}
      {dateUpdated && (
        <h2 className="dateUpdated">{updatedContentDate.toDateString()}</h2>
      )}
      {author && <h2 className="author">{author}</h2>}
      <RichTextEditor
        value={content || ""}
        onChange={() => {
          handleTextChange;
        }}
      />
    </div>
  );
};

export default Post;
