const ColorCodes = ({ first, last }) => (
  <div id="colors">
  <span style={{color:first}}>{first}</span> - <span style={{color:last}}>{last}</span>
  </div>
);

export default ColorCodes;


/* document.getElementById('gradient').style.background = `
linear-gradient(${direction},${firstColor},${lastColor})
`; */
