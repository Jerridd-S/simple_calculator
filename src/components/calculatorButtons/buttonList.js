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
        <Button
          btnText=")"
          val
          setVal
          onClickHandler={() => setVal(val + ")")}
        />
        <Button
          btnText="%"
          val
          setVal
          onClickHandler={() => setVal(val + "%")}
        />
        <Button
          btnText="/"
          val
          setVal
          onClickHandler={() => setVal(val + "/")}
        />
      </div>
      <div>
        <Button
          btnText="7"
          val
          setVal
          onClickHandler={() => setVal(val + "7")}
        />
        <Button
          btnText="8"
          val
          setVal
          onClickHandler={() => setVal(val + "8")}
        />
        <Button
          btnText="9"
          val
          setVal
          onClickHandler={() => setVal(val + "9")}
        />
        <Button
          btnText="x"
          val
          setVal
          onClickHandler={() => setVal(val + "*")}
        />
      </div>
      <div>
        <Button
          btnText="4"
          val
          setVal
          onClickHandler={() => setVal(val + "4")}
        />
        <Button
          btnText="5"
          val
          setVal
          onClickHandler={() => setVal(val + "5")}
        />
        <Button
          btnText="6"
          val
          setVal
          onClickHandler={() => setVal(val + "6")}
        />
        <Button
          btnText="-"
          val
          setVal
          onClickHandler={() => setVal(val + "-")}
        />
      </div>
      <div>
        <Button
          btnText="1"
          val
          setVal
          onClickHandler={() => setVal(val + "1")}
        />
        <Button
          btnText="2"
          val
          setVal
          onClickHandler={() => setVal(val + "2")}
        />
        <Button
          btnText="3"
          val
          setVal
          onClickHandler={() => setVal(val + "3")}
        />
        <Button
          btnText="+"
          val
          setVal
          onClickHandler={() => setVal(val + "+")}
        />
      </div>

      <div>
        <Button btnText="+/-" val setVal onClickHandler={() => setVal(-val)} />
        <Button
          btnText="0"
          val
          setVal
          onClickHandler={() => setVal(val + "0")}
        />
        <Button
          btnText="."
          val
          setVal
          onClickHandler={() => setVal(val + ".")}
        />
        <Button
          btnText="="
          val
          setVal
          onClickHandler={() => setVal(eval(val))}
        />
      </div>
    </div>
  );
}
