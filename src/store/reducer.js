import { randomHexColor } from "../utils";
import { color } from "../actions/types";

export const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

export default (state = initialState, action={}) => {
  switch (action.type) {
    // case UPDATE_COLOR :
    //   return {
    //     ...state,
    //    ... action.firstColor?...action.firstColor:null,

    //   }

    case color.UPDATEFIRST:
      return {
        ...state,
        firstColor: action.payload,
        nbColors: state.nbColors + 1,
      };
    case color.UPDATELAST:
      return {
        ...state,
        lastColor: action.payload,
        nbColors: state.nbColors + 1,
      };
    case color.DIRECTION:
      return {
        ...state,
        direction: action.payload,
      };
    case color.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
