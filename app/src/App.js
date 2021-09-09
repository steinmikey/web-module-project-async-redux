import React from "react";

import "./App.css";
import Meal from "./components/Meal";

const App = () => {
  return (
    <div className="App">
      <h1>FF APP</h1>

      <Meal />
    </div>
  );
};

export default App;

//API key:  V1xH2M6FruAfGtgeOwgphGQhrtThVe6bUHzHpRGo
//example: https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=V1xH2M6FruAfGtgeOwgphGQhrtThVe6bUHzHpRGo
