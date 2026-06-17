const button = ["7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+"];
const ButtonCalc = ({ handleClick }) => {
  return (
    <>
      {button.map((btn) => (
        <button key={btn} onClick={() => handleClick(btn)}>
          {btn}
        </button>
      ))}
    </>
  );
}
export default ButtonCalc;