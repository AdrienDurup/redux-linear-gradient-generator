import { useSelector } from "react-redux";

const ColorCodes = () => {
  const [angle, first, last] = useSelector((state) => [state.direction, state.firstColor, state.lastColor]);
  return (
    <div id="colors">
      linear-gradient({angle},&nbsp;<span className="color-text" style={{ color: first }}>{first}</span>,&nbsp;<span className="color-text" style={{ color: last }}>{last}</span>)
    </div>
  );
}

export default ColorCodes;

//#39c4cc - #c1d3cd

/* document.getElementById('gradient').style.background = `
linear-gradient(${direction},${firstColor},${lastColor})
`; */
