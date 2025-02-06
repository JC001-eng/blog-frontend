import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";
import Post from "../components/Post/Post";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to My Blog</h1>
      <Post />
      <Footer />
    </div>
  );
};

export default HomePage;
