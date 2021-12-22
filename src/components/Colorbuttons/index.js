import { useDispatch } from "react-redux";
import { setFirst, setLast, resetAll } from "../../actions";

const ColorButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button type="button" className="button" id="randFirst" onClick={()=>{dispatch(setFirst())}}>Random First</button>
      <button type="button" className="button" id="randAll" onClick={()=>{dispatch(setFirst());dispatch(setLast())}}>Random All</button>
      <button type="button" className="button" id="randLast" onClick={()=>{dispatch(setLast())}}>Random Last</button>
      <button type="button" className="button" id="reset" onClick={()=>{dispatch(resetAll())}}>Reset All</button>
    </div>
  );
};

export default ColorButtons;
