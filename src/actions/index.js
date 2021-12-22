import { color } from './types';
import { randomHexColor } from '../utils';

export const setDegres = (payload) => (
  {
    type: color.DIRECTION,
    payload,
  }
);

export const setFirst = () => ({
  type: color.UPDATEFIRST,
  payload: randomHexColor(),
});

export const setLast = () => ({
  type: color.UPDATELAST,
  payload: randomHexColor(),
});

export const resetAll = () => ({
  type: color.RESET_ALL,
});
