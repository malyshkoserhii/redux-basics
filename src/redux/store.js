import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const counterInitialState = {
  value: 10,
  step: 50,
};

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return state + payload;

    case 'counter/Decrement':
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

const rootReducer = combineReducers({ counter: counterReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
