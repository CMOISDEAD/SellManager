import React from "react";
import { Body } from "./App.style.jsx";

import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// Bootsrap
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Body>
      <Navbar />
      <div className="container">Hola</div>
      <Footer />
    </Body>
  );
};

export default App;
