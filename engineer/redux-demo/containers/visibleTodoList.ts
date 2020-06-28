import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/todoList';

let getVisibleTodos = (todos: [any], filter: VisibilityFilters) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter((t) => !t.completed);
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter((t) => t.completed);
	}
};

let mapStateToProps = (state: any) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

let mapDispatchToProps = (dispatch: any) => {
	return {
		onTodoClick(id: any) {
			dispatch(toggleTodo(id));
		},
	};
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;
