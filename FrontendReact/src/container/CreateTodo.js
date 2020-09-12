import React from 'react';
import Textbox from '../component/Form/Textbox';
import TextArea from '../component/Form/TextArea';
import { createTodo } from '../actions';
import { connect } from 'react-redux';

class CreateTodo extends React.Component{
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
		const title = this.state.title.value;
		const description = this.state.description.value; 
		if(title === "" &&  description === ""){
			this.setState({ error : "Please enter value"})
		}else{
			this.props.createTodo({
				title: title,
				description: description,
				status: false
			})
			this.props.history.push('/')
		}
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
		return(
			<div>
				<h4>Add Task</h4>
				<form onSubmit={this.onSubmitHandler}>
					{error}
					<Textbox label="Title" handler={this.titleHandler}/>
					<small className="text-danger">{this.state.title.error}</small>
					<TextArea label="Description" handler={this.descriptionHandler}/>
					<small className="text-danger">{this.state.description.error}</small>
					<div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>

			)
	}
}

export default connect(null,{createTodo})(CreateTodo);