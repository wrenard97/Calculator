import { useState } from "react";
import Buttonstyle from "./component/Buttonstyle";

export default function App() {
  const [Output, setOutput] = useState("");

  function handleClick(value: number | string) {
    switch (value) {
      case "C":
        setOutput("");
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

      default:
        setOutput(Output + value);
        break;

      case "+":
        if (!Output.includes("+")) {
          setOutput(Output + value.toString());
        } else {
          null;
        }
        break;

      case "-":
        if (!Output.includes("-")) {
          setOutput(Output + value.toString());
        } else {
          null;
        }
        break;

      case "x":
        if (!Output.includes("x")) {
          setOutput(Output + value.toString());
        } else {
          null;
        }
        break;

      case "/":
        if (!Output.includes("/")) {
          setOutput(Output + value.toString());
        } else {
          null;
        }
        break;

      case "=":
        setOutput(eval(Output).toString());
        break;
    }
  }
  return (
    <div className="bg-yellow-400 h-screen flex flex-row justify-center place-items-center">
      <div className="bg-gray-800 p-1 flex flex-col items-center gap-1 rounded-md">
        <input
          className="bg-gray-700 h-12 w-52 flex flex-row text-right text-white text-3xl font-semibold rounded-md"
          disabled
          type="text"
          value={Output}
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
