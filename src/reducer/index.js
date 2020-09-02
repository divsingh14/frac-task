import { CREATE_TODO,EDIT_TODO,DELETE_TODO,LIST_TODO,CHANGE_STATUS,FETCH_TODO } from '../actions/types';

const initialTodoState = {
    nextId: 2,
    data:
    {
        1: {
        	id : 1,
            title: 'Test',
            description : 'nice',
            status: false
        }
    }
}	

export default (state = initialTodoState,action)=>{
	switch(action.type){
		case CREATE_TODO:
			const data = action.payload;
			return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                        	id: state.nextId,
                            status: false,
                            title:data.title,
                            description : data.description 
                        },
                    },

                    nextId: state.nextId + 1
                }
            );
        case EDIT_TODO:
        	const updateState = state.data[action.id];
        	const payload = action.payload;
    
        	updateState.title = payload.title;
        	updateState.description = payload.description;
        	return {
        		...state,
        		data:{
        			...state.data,
        			[action.id]:updateState
        		}
        	};

		case DELETE_TODO:
			let todos = Object.values(state.data);
			const id = action.id;
			const newTodos = todos.filter(todo=>id !== todo.id)
			return {
				...state,
				data: newTodos
			}		

		case CHANGE_STATUS:
			const updatedState = state.data[action.id];
			updatedState.status = !updatedState.status;
			return {
				...state,
				data:{
					...state.data,
					[action.id]:updatedState
				}
			}

		case LIST_TODO:
			return state;

		case FETCH_TODO:
			const fetchedState = state.data[action.id];
			return {
				...state,
				fetchedState
			};

		default:
			return state;

	}
} 