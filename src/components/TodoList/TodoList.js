import classNames from 'classnames';
import { connect } from 'react-redux';
import Todo from '../Todo';
import todoActions from '../../redux/todos/todos-actions';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => {
  return {
    todos: getVisibleTodos(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todoActions.deleteTodo(id)),
  onToggleCompleted: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
