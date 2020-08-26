import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentalsReducer';

export function initStore() {
	const reducers = combineReducers({
	rentals,
	data1: () => ['1','2','3','4'],
	data2: () => ['a','b','c']
	})

	const store = createStore(reducers);
	return store;
}