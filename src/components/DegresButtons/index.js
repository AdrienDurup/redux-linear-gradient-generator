import { useDispatch } from "react-redux";
import { setDegres } from "../../actions";
const data = [
  { val: '0deg', id: 'to0', label: 'O°' },
  { val: '45deg', id: 'to45', label: '45°' },
  { val: '90deg', id: 'to90', label: '90°' },
  { val: '135deg', id: 'to135', label: '135°' },
  { val: '180deg', id: 'to180', label: '180°' },
  { val: '225deg', id: 'to225', label: '225°' },
  { val: '270deg', id: 'to270', label: '270°' },
  { val: '315deg', id: 'to315', label: '315°' },
];

const DegresButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      {data.map((el) => (
        <button className="button button-degres" onClick={() => { dispatch(setDegres(el.val)) }} value={el.val} key={el.id}>{el.label}</button>
      ))}
    </div>
  );
}

export default DegresButtons;
