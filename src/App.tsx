import { useEffect, useState } from "react";
import Buttonstyle from "./component/Buttonstyle";

export default function App() {
  const [Output, setOutput] = useState("");
  const [operator, setOperator] = useState("");
  const [preValue, setPreValue] = useState("");
  const [display, setDisplay] = useState("0");

  function handleClick(value: string): void {
    switch (value) {
      case "C":
        setOutput("0");
        setOperator("");
        setPreValue("");
        break;

      case "+-":
        setOutput((-1 * parseInt(Output)).toString());
        break;
      case ".":
        if (!Output.includes(".")) {
          setOutput(Output + ".");
        }
        break;

      case "%":
        setOutput((Number(Output) / 100).toString());
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        operatorClick(value);
        break;
      case "=":
        equal();
        break;
      default:
        Output !== "0" ? setOutput(Output + value) : setOutput(value);
        break;
    }
  }

  const operatorClick = (buttonValue: string) => {
    setOperator(buttonValue);

    if (preValue !== "") {
    } else {
      setPreValue(Output);
      setOutput(" ");
    }
  };

  const equal = () => {
    let equals = 0;
    const prevalues = parseFloat(preValue);
    const outputs = parseFloat(Output);

    if (operator === "+") {
      equals = prevalues + outputs;
    } else if (operator === "-") {
      equals = prevalues - outputs;
    } else if (operator === "/") {
      equals = prevalues / outputs;
    } else if (operator === "*") {
      equals = prevalues * outputs;
    }

    setOperator("");
    setOutput("");
    setPreValue(equals.toString());
  };

  useEffect(() => {
    setDisplay(Output);
  }, [Output]);

  return (
    <div className="bg-yellow-400 h-screen flex flex-row justify-center place-items-center">
      <div className="bg-gray-800 p-1 flex flex-col items-center gap-1 rounded-md">
        <input
          className="bg-gray-700 h-12 w-52 flex flex-row text-right text-white text-3xl font-semibold rounded-md"
          disabled
          type="text"
          value={display ? display : preValue}
          placeholder="0"
        />
        <div className="grid grid-cols-4 grid-rows-5 gap-1 w-52">
          {[
            "C",
            "+-",
            "%",
            "/",
            "7",
            "8",
            "9",
            "x",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "0",
            ".",
            "=",
          ].map((button, index) => (
            <Buttonstyle
              key={index}
              text={button}
              onClick={() => handleClick(button)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
