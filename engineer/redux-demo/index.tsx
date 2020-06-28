import React from 'react';
import Footer from './components/footer';
import AddTodo from './containers/addTodo';
import VisibleTodoList from './containers/visibleTodoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';

let store = createStore(todoApp);

export default function ReduxDemo() {
	return (
		<fieldset>
			<legend>Redux demo</legend>
			<Provider store={store}>
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</Provider>
		</fieldset>
	);
}
