import { useEffect, useState, useCallback, createContext } from "react";
import Buttonstyle from "./component/Buttonstyle";

export const buttonContext = createContext<any>(null);
export default function App() {
  const [currentValue, setcurrentValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [prevValue, setPrevValue] = useState(0);
  const [display, setDisplay] = useState("0");

  const handleClick = useCallback(
    (value: string) => {
      switch (value) {
        //c button
        case "C":
          setcurrentValue("0");
          setOperator("");
          setPrevValue(0);
          break;
        //positive and negative
        case "+-":
          setcurrentValue((parseFloat(currentValue) * -1).toString());
          break;
        //decimal
        case ".":
          if (!currentValue.includes(".")) {
            setcurrentValue(currentValue + ".");
          }
          break;
        //percentage
        case "%":
          setcurrentValue((Number(currentValue) / 100).toString());
          break;
        //operators
        case "+":
        case "-":
        case "x":
        case "/":
          if (operator === "") {
            setOperator(value);
            setPrevValue(parseFloat(currentValue));
            setcurrentValue("");
          } else {
            setOperator(value);
          }
          break;
        //equal
        case "=":
          equal();
          break;
        default:
          currentValue !== "0"
            ? setcurrentValue(currentValue + value)
            : setcurrentValue(value);
          break;
      }
    },
    [currentValue, operator, prevValue]
  );

  const equal = () => {
    let equals = 0;
    const prevalues = prevValue;
    const outputs = parseFloat(currentValue);

    if (operator === "+") {
      equals = prevalues + outputs;
    } else if (operator === "-") {
      equals = prevalues - outputs;
    } else if (operator === "/") {
      equals = prevalues / outputs;
    } else if (operator === "x") {
      equals = prevalues * outputs;
    }

    setOperator("");
    setPrevValue(equals);
    setcurrentValue(equals.toString());
  };

  useEffect(() => {
    setDisplay(
      formatNumberWithCommas(
        currentValue !== "" ? currentValue : prevValue.toString()
      )
    );
  }, [currentValue, prevValue]);

  //for comma separation
  const formatNumberWithCommas = (value: string): string => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  console.log("prev: " + prevValue);
  console.log("current: " + currentValue);
  console.log("operator: " + operator);

  return (
    <div className="bg-yellow-400 h-screen flex flex-row justify-center place-items-center">
      <div className="bg-gray-800 p-1 flex flex-col items-center gap-1 rounded-md">
        <input
          className="bg-gray-700 h-12 w-52 flex flex-row text-right text-white text-3xl font-semibold rounded-md"
          disabled
          type="text"
          value={display ? display : prevValue}
        />
        <div className="grid grid-cols-4 grid-rows-5 gap-1 w-52">
          <buttonContext.Provider value={{ buttonfunction: handleClick }}>
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
              <Buttonstyle key={index} text={button} />
            ))}
          </buttonContext.Provider>
        </div>
      </div>
    </div>
  );
}
