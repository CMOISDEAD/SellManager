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
      <div className="container">Lorem saepe repellendus quidem saepe neque Impedit laboriosam rem atque maiores placeat enim. 
        Impedit minus laudantium dolores aperiam qui! In quae non similique saepe eaque quos esse nihil Quia omnis</div>
    </Body>
  );
};

export default App;
