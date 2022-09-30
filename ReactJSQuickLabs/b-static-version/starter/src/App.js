import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "popper.js";
import "jquery";
import "./Components/css/qa.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <div className="container">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
