import React from "react";
import StockComponent from "./routes/StockComponent";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="text-center py-4">
        <StockComponent />
      </header>
    </div>
  );
};

export default App;
