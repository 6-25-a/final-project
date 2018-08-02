import React from 'react';
import axios from 'axios';
import {
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from 'reactstrap';

class TaskForm extends React.Component {
	save(e) {
		e.preventDefault();
		console.log(this.state);
	}
	render() {
		return ( <Form onSubmit = {(e) => this.save(e)}>
			<FormGroup>
			<Label for="category">Category</Label>
			<Input type="select" name="category" id="category" onChange = {(e) => this.setValue(e)}>
			<option>Please Select Option</option>
			<option value="website_developer">Website Developer</option>
			<option value="mobile_developer">Mobile Developer</option>
			<option value="web_design_UX">Web Design / UX</option>
			</Input>
			</FormGroup>
			<FormGroup>
			<Label for="task">Task</Label>
			<Input type="textarea" name="task" id="task" />
			</FormGroup>
			<button>Submit</button>
			</Form>
		);
	}
	setValue(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	login() {
    axios.post('/api/users/tasks', this.state).then((res) => {
      console.log(res);
      localStorage.setItem('auth_token', res.data.token);
    }).catch((err) => {
      console.log('error')
    })
  }
}

export default TaskForm;
