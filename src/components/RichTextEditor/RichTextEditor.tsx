import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface TextEditorProps {
  value?: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      placeholder="Write something amazing..."
    />
  );
};

export default RichTextEditor;
