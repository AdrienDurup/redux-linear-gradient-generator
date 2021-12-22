const ColorButtons = ({setFirst, setLast, setAll, resetAll}) => (
  <div className="buttons group">
    <button type="button" className="button" id="randFirst" onClick={setFirst}>Random First</button>
    <button type="button" className="button" id="randAll">Random All</button>
    <button type="button" className="button" id="randLast">Random Last</button>
    <button type="button" className="button" id="reset">Reset All</button>
  </div>
);

export default ColorButtons;
