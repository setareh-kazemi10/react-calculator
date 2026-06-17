const ClearCalc = ({ handleClick }) => {
     return (
          <button className="clear" onClick={() => handleClick("C")}>C</button>
     );
}
export default ClearCalc;