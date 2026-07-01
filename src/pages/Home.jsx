import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-0 bottom-0 h-100 w-100 rounded-full bg-yellow-500/10 blur-[100px] sm:animate-pulse" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Home;