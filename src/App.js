import React, { Component } from 'react';
// import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
import Container from './components/Container';
// import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
// import Filter from './components/TodoFilter';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
// import Tabs from './components/Tabs';
// import Clock from './components/Clock';
// import Form from './components/Form';
// import initialTodos from './todos.json';
// import tabs from './tabs.json';

class App extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   const todos = localStorage.getItem('todos');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     this.setState({ todos: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;

  //   if (nextTodos !== prevTodos) {
  //     localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   }

  //   if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //     this.toggleModal();
  //   }
  // }

  // addTodo = text => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [todo, ...todos],
  //   }));
  // };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* <Tabs items={tabs} /> */}
        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {/* <button type="button" onClick={this.toggleModal}>
          Open the modal window
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor />
          </Modal>
        )}

        {/* TODO: вынести в отдельный компонент */}
        {/* <div>
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div> */}

        {/* <Filter value={filter} onChange={this.changeFilter} /> */}

        {/* <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        {/* <Counter /> */}
      </Container>
    );
  }
}

export default App;
