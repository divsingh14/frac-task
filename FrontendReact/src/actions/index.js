import { CREATE_TODO,EDIT_TODO,DELETE_TODO,LIST_TODO,CHANGE_STATUS,FETCH_TODO } from './types';
import axios from '../api';

export const createTodo = (data) => async(dispatch )=>{
		console.log(data)
		const response = await axios.post('/newtodo/',data);
		console.log(response)
		dispatch({
			type: CREATE_TODO,
			payload : response.data
		});
	}

export const editTodo = (id,data) => async(dispatch )=>{
		const response = await axios.post(`/edittodo/${id}/`,data);
		dispatch({
			type: EDIT_TODO,
			id: id,
			payload : response.data
		});
	}

export const listTodo = () => async(dispatch )=>{
		const response = await axios.get('/list');
		dispatch({
			type: LIST_TODO,
			payload : response.data
		});
	}

export const toggleCheckTodo = (id) => async(dispatch)=>{
	console.log(id)
		const response = await axios.get(`/gettodo/${id}`);
	console.log(response)
		
		const newResponse = response.data
		newResponse.status = !newResponse.status;
		const editResponse = await axios.post(`/edittodo/${id}/`,newResponse);
		dispatch({
			type: CHANGE_STATUS,
			payload: editResponse.data
		});
	}

export const deleteTodo = (id) => async(dispatch )=>{
		const response = await axios.delete(`/deletetodo/${id}/`);
		dispatch({
			type: DELETE_TODO,
			payload:id
		});
	}

export const fetchTodo = (id) => async(dispatch )=>{
		const response = await axios.get(`/gettodo/${id}`);
		dispatch({
			type: FETCH_TODO,
			payload: response.data
		});
	}
