import React, { useState } from "react";
import "./Calculator.css"; // Import your CSS file

function Calculator() {
  const [input, setInput] = useState("");

  function addToInput(value) {
    setInput((prevInput) => prevInput + value);
  }

  function clearInput() {
    setInput("");
  }

  function calculate() {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  }

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input
          type="text"
          className="input-right-aligned"
          name="screen"
          id="screen"
          value={input}
          readOnly
        />
        <table id="table">
          <tbody>
            <tr>
              <td>
                <button class="key" onClick={() => clearInput()}>
                  C
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="key" onClick={() => addToInput("7")}>
                  7
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("8")}>
                  8
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("9")}>
                  9
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("/")}>
                  /
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="key" onClick={() => addToInput("4")}>
                  4
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("5")}>
                  5
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("6")}>
                  6
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("+")}>
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="key" onClick={() => addToInput("1")}>
                  1
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("2")}>
                  2
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("3")}>
                  3
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("-")}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button class="key" onClick={() => addToInput("0")}>
                  0
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput(".")}>
                  .
                </button>
              </td>
              <td>
                <button class="key" onClick={() => calculate()}>
                  =
                </button>
              </td>
              <td>
                <button class="key" onClick={() => addToInput("*")}>
                  *
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
