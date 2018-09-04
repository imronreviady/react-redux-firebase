import { todosRef } from '../config/firebase';
import { FETCH_TODOS, COMPLETE_TODO } from './types';

export const addToDo = newToDo => async dispatch => {
	todosRef.push().set(newToDo);
};

export const fetchToDos = () => async dispatch => {
	todosRef.on("value", snapshot => {
		dispatch({
			type: FETCH_TODOS,
			payload: snapshot.val()
		});
	});
};

export const completeToDo = () => async dispatch => {
	todosRef.on("value", snapshot => {
		dispatch({
			type: COMPLETE_TODO,
			payload: snapshot.val()
		});
	});
};