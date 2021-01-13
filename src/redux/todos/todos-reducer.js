import { combineReducers } from 'redux';
import * as types from './todos-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    default:
      return state;
  }
};

const deleteTodo = (state = '', { type, payload }) => {};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
