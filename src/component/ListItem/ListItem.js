import React from 'react';
import { Link } from 'react-router-dom';

const listItem = (props)=>{
	let operation = '';
	if(props.completed === false){
		operation = (
				<div className="col-4">
		    		<button onClick={props.toggle} className="btn btn-secondary btn-sm m-1">Check</button>
		    		<Link to={{
		    			pathname : '/edittodo',
		    			search : `?search=${props.todoId}`
		    			}} className="btn btn-info btn-sm m-1">Edit</Link>
		    		<button onClick={props.delete} className="btn btn-danger btn-sm m-1">Delete</button>
		    	</div>
			);
	}else{
		operation = (
				<div className="col-4 text-center">
					<button onClick={props.toggle} className="btn btn-secondary btn-sm m-1">Uncheck</button>
		    		<button onClick={props.delete} className="btn btn-danger btn-sm m-1">Delete</button>
		    	</div>
			);
	}

	return(
		<div className="card">
		  <div className="card-body">
		    <div className="row">
		    	<div className="col-8">
		    		<h5 className="card-title">{props.title}</h5>
		    		<p>{props.description}</p>
		    	</div>
		    	{ operation }
		    </div>
		  </div>
		</div>
	);
};

export default listItem;