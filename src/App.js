import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");

  const clearClicked = () => {
    setVal("");
  };
  const zeroClicked = () => {
    setVal(val + "0");
  };
  const oneClicked = () => {
    setVal(val + "1");
  };
  const twoClicked = () => {
    setVal(val + "2");
  };
  const threeClicked = () => {
    setVal(val + "3");
  };
  const fourClicked = () => {
    setVal(val + "4");
  };
  const fiveClicked = () => {
    setVal(val + "5");
  };
  const sixClicked = () => {
    setVal(val + "6");
  };
  const sevenClicked = () => {
    setVal(val + "7");
  };
  const eightClicked = () => {
    setVal(val + "8");
  };
  const nineClicked = () => {
    setVal(val + "9");
  };
  const mutiplyClicked = () => {
    setVal(val + "*");
  };
  const divideClicked = () => {
    setVal(val + "/");
  };
  const plusClicked = () => {
    setVal(val + "+");
  };
  const subtactClicked = () => {
    setVal(val + "-");
  };
  const percentageClicked = () => {
    setVal(val + "%");
  };
  const decimalClicked = () => {
    setVal(val + ".");
  };
  const equalsClicked = () => {
    setVal(eval(val));
  };
  const negateClicked = () => {
    setVal(-val);
  };
  const leftParenClicked = () => {
    setVal(val + "(");
  };
  const rightParenClicked = () => {
    setVal(val + ")");
  };
  const backspaceClicked = () => {
    setVal(val.slice(0, -1));
  };
  return (
    <div>
      <div>
        <input value={val}></input>
      </div>
      <div>
        <button
          onClick={backspaceClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          del
        </button>
      </div>
      <div>
        <button
          onClick={clearClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          C
        </button>
        <button
          onClick={leftParenClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          (
        </button>
        <button
          onClick={rightParenClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          )
        </button>
        <button
          onClick={percentageClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          %
        </button>
        <button
          onClick={divideClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          /
        </button>
      </div>
      <div>
        <button
          onClick={sevenClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          7
        </button>
        <button
          onClick={eightClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          8
        </button>
        <button
          onClick={nineClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          9
        </button>
        <button
          onClick={mutiplyClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          x
        </button>
      </div>
      <div>
        <button
          onClick={fourClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          4
        </button>
        <button
          onClick={fiveClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          5
        </button>
        <button onClick={sixClicked} type="button" class="btn btn-outline-dark">
          6
        </button>
        <button
          onClick={subtactClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          -
        </button>
      </div>
      <div>
        <button onClick={oneClicked} type="button" class="btn btn-outline-dark">
          1
        </button>
        <button onClick={twoClicked} type="button" class="btn btn-outline-dark">
          2
        </button>
        <button
          onClick={threeClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          3
        </button>
        <button
          onClick={plusClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          +
        </button>
      </div>

      <div>
        <button
          onClick={negateClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          +/-
        </button>
        <button
          onClick={zeroClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          0
        </button>
        <button
          onClick={decimalClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          .
        </button>
        <button
          onClick={equalsClicked}
          type="button"
          class="btn btn-outline-dark"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
