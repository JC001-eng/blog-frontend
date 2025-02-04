import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";
import MediaUploader from "../components/Media/MediaUploader/MediaUploader";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to My Blog</h1>
      <MediaUploader />
      <Footer />
    </div>
  );
};

export default HomePage;
