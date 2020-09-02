import { CREATE_TODO,EDIT_TODO,DELETE_TODO,LIST_TODO,CHANGE_STATUS,FETCH_TODO } from './types';


export const createTodo = (data) => (dispatch,getState )=>{
		dispatch({
			type: CREATE_TODO,
			payload : data
		});
	}

export const editTodo = (id,data) => (dispatch,getState )=>{
		dispatch({
			type: EDIT_TODO,
			id: id,
			payload : data
		});
	}

export const listTodo = () => (dispatch,getState )=>{
		dispatch({
			type: LIST_TODO
		});
	}

export const toggleCheckTodo = (id) => (dispatch,getState )=>{
		dispatch({
			type: CHANGE_STATUS,
			id
		});
	}

export const deleteTodo = (id) => (dispatch,getState )=>{
		dispatch({
			type: DELETE_TODO,
			id
		});
	}

export const fetchTodo = (id) => (dispatch,getState )=>{
		dispatch({
			type: FETCH_TODO,
			id
		});
	}
