import React from 'react';
import Textbox from '../component/Form/Textbox';
import TextArea from '../component/Form/TextArea';
import { fetchTodo,editTodo } from '../actions';
import { connect } from 'react-redux';

class ViewTodo extends React.Component{
	state = {
		title: {
			value: '',
			error: ''
		},
		description:{
			value: '',
			error: ''
		},
		error: ''
	}

	titleHandler = (event)=>{
		const value = event.target.value;
		const updateTitle = this.state.title;

		if(value === ''){
			updateTitle.error = "Please enter value.";

			this.setState({
				title : updateTitle
			})
		}else{
			updateTitle.error = "";
			updateTitle.value = value;
			this.setState({
				title : updateTitle
			})
		}
	}
	descriptionHandler = (event)=>{
		const value = event.target.value;
		const updateDescription = this.state.description;

		if(value === ''){
			updateDescription.error = "Please enter value.";

			this.setState({
				description : updateDescription
			})
		}else{
			updateDescription.error = "";
			updateDescription.value = value;
			this.setState({
				description : updateDescription
			});
		}
	}

	onSubmitHandler =(event)=>{
		event.preventDefault();
		const title = this.state.title.value === '' ? this.props.todo.title : this.state.title.value;
		const description = this.state.description.value === '' ? this.props.todo.description : this.state.description.value; 
		
		this.props.editTodo(this.props.todo.id,{
			title: title,
			description: description,
			status: false
		})
		this.props.history.push('/')
	
	}

	componentDidMount(){
		const params = new URLSearchParams(this.props.location.search);
		const id = params.get('search');
		this.props.fetchTodo(id);
	}

	render(){
		let error = '';
		if(this.state.error){
			error= (
				<div className="alert alert-danger" role="alert">
					{this.state.error}
				</div>
			);
		}
		let form;
		if(this.props.todo){
			form = (
				<div>
					<h4 > Title : {this.props.todo.title}</h4> 
					<Textbox label="Title" handler={this.titleHandler}/>
					<small className="text-danger">{this.state.title.error}</small>

					<h4>Description : {this.props.todo.description}</h4>
					<TextArea label="Description" handler={this.descriptionHandler}/>
					<small className="text-danger">{this.state.description.error}</small>
					<div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</div>
			);
		}

		return(
			<div >
				<h4>Edit Task</h4>
				<div className="card p-5">
					<form onSubmit={this.onSubmitHandler}>
						{error}
						{form}
					</form>
				</div>
			</div>

			)
	}
}

const mapStateToProps = (state,ownProps)=>{
	return {
		todo : state.fetchedState
	}
}

export default connect(mapStateToProps,{fetchTodo,editTodo})(ViewTodo);