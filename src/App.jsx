import React, { useState } from "react";
import Home from "./layouts/Home";
import Loader from "./backgrounds/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Home />

      {loading && (
        <Loader onFinish={() => setLoading(false)} />
      )}
    </>
  );
};

export default App;