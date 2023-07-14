import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux</h1>
      <br />
      <button onClick={() => dispatch(incNumber())}> + </button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(decNumber())}> - </button>
    </>
  );
};

export default App;
