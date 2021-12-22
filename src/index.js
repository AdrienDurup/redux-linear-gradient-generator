// == Imports
import App from './components/App';
import { render } from 'react-dom';
import store from './store';
import { randomHexColor, generateSpanColor } from './utils';
import { setFirst, setLast, setDegres, resetAll } from './actions';

// == State
// const state = {
//   firstColor: '#e367a4',
//   lastColor: '#48b1f3',
//   direction: '90deg',
//   nbColors: 0,
// };

// == Rendu dans le DOM
function renderGradient() {
  const state = store.getState();
  const { direction, firstColor, lastColor } = state;

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
// function renderColors() {
//   const state = store.getState();
//   const { firstColor, lastColor } = state;

//   const firstSpan = generateSpanColor(firstColor);
//   const lastSpan = generateSpanColor(lastColor);

//   const result = `${firstSpan} - ${lastSpan}`;

//   document.getElementById('colors').innerHTML = result;
// }

// == Initialisation
function draw() {
  renderGradient();
  //renderColors();
}

draw();

store.subscribe(draw);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch(setFirst());
    store.dispatch(setLast());
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch(setFirst());
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch(setLast());
  });

const degresButtons = document.querySelectorAll('.button-degres');
degresButtons.forEach((el) => {
  el.addEventListener('click', () => { store.dispatch(setDegres(el.value)) });
});

document.getElementById('reset')
  .addEventListener('click', () => {
    store.dispatch(resetAll());
  });

  const root = document.getElementById('root');
  render(<App />, root);
