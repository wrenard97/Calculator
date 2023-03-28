interface IButtonStyle {
  text: string;
  onClick?: () => void;
}

function Buttonstyle({ text, onClick }: IButtonStyle): JSX.Element {
  return (
    <button
      className={`${
        text === "="
          ? "col-span-2 h-11 bg-red-700 text-white rounded-md font-semibold hover:bg-red-800"
          : "col-span-1  h-11 bg-indigo-700 text-white rounded-md font-semibold hover:bg-indigo-800"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Buttonstyle;
