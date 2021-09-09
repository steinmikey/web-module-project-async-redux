import React from "react";

import "./App.css";
import Meal from "./components/Meal";

const App = () => {
  return (
    <div className="App">
      <h1>Try This Delicious Recipe!</h1>

      <Meal />
    </div>
  );
};

export default App;
