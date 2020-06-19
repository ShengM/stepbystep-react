import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

let store = createStore(rootReducers);
console.log('initial state:', store.getState());

let unsubscribe = store.subscribe(() => console.log('state change:', store.getState()));

store.dispatch(addTodo('Jim'));
store.dispatch(addTodo('Lucy'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
store.dispatch(toggleTodo(0));
console.log('last state:', store.getState());

export default function ReduxDemo() {
	return (
		<fieldset>
			<legend>Redux demo</legend>
			{/* <Provider store={store}></Provider> */}
		</fieldset>
	);
}
