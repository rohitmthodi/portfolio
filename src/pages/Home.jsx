import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/large-triangles.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 backdrop-blur-xs" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Home;