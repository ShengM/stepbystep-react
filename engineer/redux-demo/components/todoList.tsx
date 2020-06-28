import React from 'react';
import Todo from './todo';

interface Props {
	todos: Array<{ id: number; text: string; completed: boolean }>;
	onTodoClick: (id: number) => void;
}

let TodoList: React.FC<Props> = ({ todos, onTodoClick }) => (
	<ul>
		{todos.map((todo) => (
			<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
		))}
	</ul>
);

export default TodoList;
