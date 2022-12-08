import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Display = () => {
  return (
    <div>
      <input type="text" readOnly></input>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div>
        <Display></Display>
      </div>
      <div>
        <button type="button" class="btn btn-outline-dark">
          C
        </button>
        <button type="button" class="btn btn-outline-dark">
          ()
        </button>
        <button type="button" class="btn btn-outline-dark">
          %
        </button>
        <button type="button" class="btn btn-outline-dark">
          /
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-outline-dark">
          7
        </button>
        <button type="button" class="btn btn-outline-dark">
          8
        </button>
        <button type="button" class="btn btn-outline-dark">
          9
        </button>
        <button type="button" class="btn btn-outline-dark">
          x
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-outline-dark">
          4
        </button>
        <button type="button" class="btn btn-outline-dark">
          5
        </button>
        <button type="button" class="btn btn-outline-dark">
          6
        </button>
        <button type="button" class="btn btn-outline-dark">
          -
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-outline-dark">
          1
        </button>
        <button type="button" class="btn btn-outline-dark">
          2
        </button>
        <button type="button" class="btn btn-outline-dark">
          3
        </button>
        <button type="button" class="btn btn-outline-dark">
          +
        </button>
      </div>

      <div>
        <button type="button" class="btn btn-outline-dark">
          +/-
        </button>
        <button type="button" class="btn btn-outline-dark">
          0
        </button>
        <button type="button" class="btn btn-outline-dark">
          .
        </button>
        <button type="button" class="btn btn-outline-dark">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
