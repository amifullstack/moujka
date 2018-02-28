import { INCREMENT_VALUE, DECREMENT_VALUE } from '../Actions/index';

const initialState = 0;

const value = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_VALUE: {
      return state + 1;
    }

    case DECREMENT_VALUE: {
      return Math.max(state - 1, 0);
    }
    default: 
      return state;
  }
}

export default value;