import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to My Blog</h1>
      <Footer />
    </div>
  );
};

export default HomePage;
