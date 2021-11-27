import React, { useState } from "react";
import { Body } from "./App.style.jsx";

import { Navbar } from "../../components/Navbar/Navbar";
import { Money } from "../../components/Money/Money";

// Bootsrap
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [moneyIn, setMoneyIn] = useState(0);
  const [moneyOut, setMoneyOut] = useState(0);
  const [money, setMoney] = useState(0);

  const tradeHandler = () => {
    console.log(`Money In [${moneyIn}] - Money Out [${moneyOut}]`);
    let trade = moneyIn - moneyOut;
    setMoney(trade);
  };

  return (
    <Body>
      <Navbar />
      <div className="container">
        <div className="p-3">
          <div className="row">
            <div className="col">
              <Money title="Money in" callback={setMoneyIn} />
            </div>
            <div className="col">
              <Money title="Money out" callback={setMoneyOut} />
            </div>
          </div>
          <div className="text-center pb-2">
            <button className="btn btn-outline-success" onClick={tradeHandler}>
              Trade!
            </button>
          </div>
          <div className="bg-white text-success fs-3 text-center rounded">
            <p className="fs-6 text-primary">Money to be returned:</p>
            {money ? `$ ${money}` : "0"}
          </div>
        </div>
      </div>
    </Body>
  );
};

export default App;
