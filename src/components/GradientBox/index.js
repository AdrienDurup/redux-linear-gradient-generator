import { useSelector } from "react-redux";

const GradientBox = () => {
  const [direction, firstColor, lastColor] = useSelector((state) => [state.direction, state.firstColor, state.lastColor]);
  let style = {
    background: `linear-gradient(${direction}, ${firstColor}, ${lastColor})`,
  };
  return (
    <div id="gradient" style={style} />
  );
};
export default GradientBox;
