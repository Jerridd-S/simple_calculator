import React from "react";
import { useState } from "react";
import Button from "./button";

export default function ButtonList() {
  const [val, setVal] = useState("");
  return (
    <div
      id="calculatorSize"
      className="container p-4 border bg-light rounded-5"
    >
      <div>
        <input value={val}></input>
      </div>
      <div>
        <Button
          btnText="del"
          val
          setVal
          onClickHandler={() => setVal(val.slice(0, -1))}
        />
      </div>
      <div>
        <Button btnText="C" val setVal onClickHandler={() => setVal("")} />
        <Button
          btnText="("
          val
          setVal
          onClickHandler={() => setVal(val + "(")}
        />
        <button
          onClick={() => setVal(val + ")")}
          type="button"
          class="btn btn-outline-dark"
        >
          )
        </button>
        <button
          onClick={() => setVal(val + "%")}
          type="button"
          class="btn btn-outline-dark"
        >
          %
        </button>
        <button
          onClick={() => setVal(val + "/")}
          type="button"
          class="btn btn-outline-dark"
        >
          /
        </button>
      </div>
      <div>
        <button
          onClick={() => setVal(val + "7")}
          type="button"
          class="btn btn-outline-dark"
        >
          7
        </button>
        <button
          onClick={() => setVal(val + "8")}
          type="button"
          class="btn btn-outline-dark"
        >
          8
        </button>
        <button
          onClick={() => setVal(val + "9")}
          type="button"
          class="btn btn-outline-dark"
        >
          9
        </button>
        <button
          onClick={() => setVal(val + "*")}
          type="button"
          class="btn btn-outline-dark"
        >
          x
        </button>
      </div>
      <div>
        <button
          onClick={() => setVal(val + "4")}
          type="button"
          class="btn btn-outline-dark"
        >
          4
        </button>
        <button
          onClick={() => setVal(val + "5")}
          type="button"
          class="btn btn-outline-dark"
        >
          5
        </button>
        <button
          onClick={() => setVal(val + "6")}
          type="button"
          class="btn btn-outline-dark"
        >
          6
        </button>
        <button
          onClick={() => setVal(val + "-")}
          type="button"
          class="btn btn-outline-dark"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => setVal(val + "1")}
          type="button"
          class="btn btn-outline-dark"
        >
          1
        </button>
        <button
          onClick={() => setVal(val + "2")}
          type="button"
          class="btn btn-outline-dark"
        >
          2
        </button>
        <button
          onClick={() => setVal(val + "3")}
          type="button"
          class="btn btn-outline-dark"
        >
          3
        </button>
        <button
          onClick={() => setVal(val + "+")}
          type="button"
          class="btn btn-outline-dark"
        >
          +
        </button>
      </div>

      <div>
        <button
          onClick={() => setVal(-val)}
          type="button"
          class="btn btn-outline-dark"
        >
          +/-
        </button>
        <button
          onClick={() => setVal(val + "0")}
          type="button"
          class="btn btn-outline-dark"
        >
          0
        </button>
        <button
          onClick={() => setVal(val + ".")}
          type="button"
          class="btn btn-outline-dark"
        >
          .
        </button>
        <button
          onClick={() => setVal(eval(val))}
          type="button"
          class="btn btn-outline-dark"
        >
          =
        </button>
      </div>
    </div>
  );
}
