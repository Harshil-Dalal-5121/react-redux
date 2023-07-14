import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

const App = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="app">
      <div className="amount">
        <p>{amount}</p>
      </div>
      <div className="buttons">
        <button className="deposit btn" onClick={() => depositMoney(1000)}>
          Deposit
        </button>
        <button
          className={amount === 0 ? "btn" : "withdraw btn"}
          disabled={amount === 0}
          onClick={() => (amount !== 0 ? withdrawMoney(100) : bankrupt())}
        >
          Withdraw
        </button>
        <button className="bankrupt btn" onClick={() => bankrupt()}>
          Bankrupt
        </button>
      </div>
    </div>
  );
};

export default App;
