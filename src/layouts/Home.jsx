import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;