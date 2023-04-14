import { useContext } from "react";
import { buttonContext } from "../App";

interface IButtonStyle {
  text: string;
}

function Buttonstyle({ text }: IButtonStyle): JSX.Element {
  const { buttonfunction } = useContext(buttonContext);
  return (
    <button
      className={`${
        text === "="
          ? "col-span-2 h-11 bg-red-700 text-white rounded-md font-semibold hover:bg-red-800"
          : "col-span-1  h-11 bg-indigo-700 text-white rounded-md font-semibold hover:bg-indigo-800"
      }`}
      onClick={() => buttonfunction(text)}
    >
      {text}
    </button>
  );
}
export default Buttonstyle;
