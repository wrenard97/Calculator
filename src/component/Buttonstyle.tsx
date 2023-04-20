import { useContext } from "react";
import { buttonContext } from "../App";

interface IButtonStyle {
  text: string;
}

function Buttonstyle({ text }: IButtonStyle): JSX.Element {
  const { buttonfunction } = useContext(buttonContext);
  return (
    <button
      className={` text-white rounded-md font-semibold h-11 ${
        text === "="
          ? "col-span-2 bg-red-700 hover:bg-red-800"
          : "col-span-1 bg-indigo-700 hover:bg-indigo-800"
      }`}
      onClick={() => buttonfunction(text)}
    >
      {text}
    </button>
  );
}
export default Buttonstyle;
