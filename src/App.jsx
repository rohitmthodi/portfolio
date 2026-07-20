import { useState, useCallback } from "react";
import Home from "./layouts/Home";
import Loader from "./backgrounds/Loader";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <CustomCursor />
      <Home />

      {loading && (
        <Loader onFinish={handleFinish} />
      )}
    </>
  );
};

export default App;