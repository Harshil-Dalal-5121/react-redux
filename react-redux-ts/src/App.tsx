import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

const App = () => {
  const dispatch = useDispatch();
  const { depositMenoy, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);
  console.log(amount);
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMenoy(1000)}>Deposit</button>
      <button onClick={() => (amount !== 0 ? withdrawMoney(100) : bankrupt())}>
        Withdraw
      </button>
      <button onClick={() => bankrupt()}>Bankrupts</button>
    </div>
  );
};

export default App;
