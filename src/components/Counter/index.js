import { useSelector } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => {
    return state.nbColors;
  });
  return (
    <div id="nbColors">
      {`${count} couleur(s) générée(s)`}
    </div>
  );
};

export default Counter;
