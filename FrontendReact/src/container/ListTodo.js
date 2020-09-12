import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../component/ListItem/ListItem';
import { listTodo,toggleCheckTodo,deleteTodo } from '../actions';
import { connect } from 'react-redux';

class ListTodo extends Component{

	componentDidMount(){
		this.props.listTodo()
	}

	toggleStatus(id){
		this.props.toggleCheckTodo(id);
	}

	deleteTodo(id){
		this.props.deleteTodo(id);
	}

	renderList(){
		console.log(this.props.todos)
		if(this.props.todos !== undefined && this.props.todos.length > 0){
			return this.props.todos.map(todo => {
				return <ListItem 
							key={todo.id}
							title={todo.title}
							description={todo.description} 
							completed={todo.status}
							todoId={todo.id}
							delete={(event) => this.deleteTodo(todo.id)}
							toggle={(event) => this.toggleStatus(todo.id)}
							/>
			});
		}else{
			return <h5 className="text-center">No Task</h5>
		}
	}
	render(){
		return(
			<div className="row">
				<div className="col-6">
					<h4>List Todo</h4>
				</div>
				<div className="col-6 text-right">
					<Link to="/addtodo" className="btn btn-primary btn-sm">Add Task</Link>
				</div>
				<div className="col-12 mt-3">
					{this.renderList()}				
				</div>
			</div>
		);
	}
}

const mapStateToProps =(state)=>{
	return {
		todos : Object.values(state)
	};
}


export default connect(mapStateToProps, {
		listTodo,
		toggleCheckTodo,
		deleteTodo
	})(ListTodo);