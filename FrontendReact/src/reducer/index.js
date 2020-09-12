import { CREATE_TODO,EDIT_TODO,DELETE_TODO,LIST_TODO,CHANGE_STATUS,FETCH_TODO } from '../actions/types';
import _ from 'lodash';

export default (state = {},action)=>{
	switch(action.type){
		case CREATE_TODO:
			const data = action.payload;
			return {
                    ...state,
                    [data.id]:data
                }
        case EDIT_TODO:
			const updatedTodo = action.payload
			
        	return {
				...state,
				[updatedTodo.id]:updatedTodo
        	};

		case DELETE_TODO:
			return _.omit(state,action.payload)		

		case CHANGE_STATUS:
			return {
				...state,
				[action.payload.id]: action.payload
			}

		case LIST_TODO:	
			const todos = action.payload;
			return {
				...state,
				..._.mapKeys(todos,"id")
			};

		case FETCH_TODO:
			const fetchedTodo = action.payload;
			console.log(fetchedTodo)
			console.log(state)

			return {
				...state,
				[fetchedTodo.id]:fetchedTodo
			};

		default:
			return state;

	}
} 