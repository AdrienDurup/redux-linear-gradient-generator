import { color } from './types';
import { randomHexColor } from '../utils';

export const setDegres = (angle) => (
  {
    type: color.DIRECTION,
    payload: `${angle}deg`,
  }
);

// export const setColor = (prop) => {
//   const obj = {};
//   obj.type = color.UPDATE;
//   obj[prop] = randomHexColor();
//   return obj;
// };

export const setFirst = () => ({
  type: color.UPDATEFIRST,
  payload: randomHexColor(),
});

export const setLast = () => ({
  type: color.UPDATEFIRST,
  payload: randomHexColor(),
});

export const resetAll = () => ({
  type: color.RESET_ALL,
});

// document.getElementById('randLast')
//   .addEventListener('click', () => {
//     store.dispatch({
//       type: colorT.UPDATELAST,
//       payload: randomHexColor(),
//     });
//   });
