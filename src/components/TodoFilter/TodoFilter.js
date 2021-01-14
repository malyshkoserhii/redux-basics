import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';

import './TodoFilter.scss';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProp = state => ({
  value: state.todos.filter,
});

const mapDispatchToProp = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProp, mapDispatchToProp)(TodoFilter);
