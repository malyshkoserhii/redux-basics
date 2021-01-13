import * as types from './todos-types';
import shortid from 'shortid';

const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  psyload: todoId,
});

export default { addTodo, deleteTodo };
