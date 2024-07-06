// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext/ProductContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>
);
