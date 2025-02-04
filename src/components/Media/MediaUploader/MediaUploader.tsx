import React, { useState } from "react";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_VIDEO_SIZE = 50 * 1024 * 1024;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const MediaUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const selectedFile = event?.target?.files?.[0];

    if (selectedFile) {
      if (selectedFile.type.startsWith("image/")) {
        if (selectedFile.size > MAX_IMAGE_SIZE) {
          setError("Please upload an image under 5MB");
          return;
        } else {
          setFile(selectedFile);
        }
      }
      if (selectedFile.type.startsWith("video/")) {
        if (selectedFile.size > MAX_VIDEO_SIZE) {
          setError("Please upload a video under 50MB");
          return;
        } else {
          setFile(selectedFile);
        }
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    if (!file) {
      setError("Please select a valid file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${API_URL}/uploads`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload file :/");
      }
      const data = await response.json();
      setMessage(`File uploaded successfully! View it here: ${data.url}`);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <h2>Upload Media</h2>
      <input type="file" accept="image/*,video/*" onChange={handleFileUpload} />
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      {file && (
        <button type="submit" className="submit" onClick={handleSubmit}>
          upload image
        </button>
      )}
    </div>
  );
};

export default MediaUploader;
