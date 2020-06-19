import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action: { type: any; filter: VisibilityFilters }) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

function todos(state: any[] = [], action: any) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false,
				},
			];
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed,
					});
				}
				return todo;
			});
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos,
});

export default todoApp;
