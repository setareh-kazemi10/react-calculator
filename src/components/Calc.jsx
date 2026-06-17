import { useState } from "react";
import './Calc.css';
import ButtonCalc from "./ButtonCalc";
import InputDisplay from "./InputDisplay";
import ResultDisplay from "./ResultDisplay";
import ClearCalc from "./ClearCalc";

const Calc = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };
  return (
    <div className="calculator">
      <div className="display">
        <InputDisplay input={input} />
        <ResultDisplay result={result} />
      </div>

      <div className="buttons">
        <ButtonCalc handleClick={handleClick} />
        <ClearCalc handleClick={handleClick} />
      </div>
    </div>
  );
};
export default Calc;
