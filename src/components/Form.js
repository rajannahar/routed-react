import React from "react";

export class Form extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		name: ''
	// 	}
	// }

	state = {
		name: '',
		gendermale: false, 
		genderfemale: false
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	// radioClick = (e) => {
	// 	//e.preventDefault();
	// 	console.log(e.target.value);
	// }

	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	}

	handleGenderMale = (e) => {
		this.setState({ 
			gendermale: e.target.checked, 
			genderfemale: false });
	}

	handleGenderFemale = (e) => {
		this.setState({ 
			genderfemale: e.target.checked,
			gendermale: false });
	}

	render() {
		return (
			<div className="full-width-forms">
			<h3>Form Component</h3>

				<form onSubmit={this.handleSubmit}>
					<div className="col-1-2">
						<label>
							<input placeholder="name" 
								type="name" 
								value={this.state.name} 
								onChange={this.handleNameChange} 
								required />
						</label>
					</div>
					<div className="clear"></div>
					<div className="col-1-2">
						<label><input name="dob" placeholder="DOB" type="date" /></label>
					</div>
					<div className="clear"></div>
					
					<div className="col-1-5">
						<label>Gender</label>
					</div>

					<div className="col-1-2">
						<div className="col-1-2">
							<input 
								type="radio" 
								value="MALE" 
								name="gender" 
								checked={this.state.genderMale} 
								onChange={this.handleGenderMale} 
								required /> Male
						</div>
						<div className="col-1-2">
							<input 
								type="radio" 
								value="FEMALE" 
								name="gender" 
								checked={this.state.genderFemale} 
								onChange={this.handleGenderFemale} /> Female
						</div>
					</div>

					<div className="clear"></div>

					<div className="col-1-2">
						<label><input placeholder="email" type="email" /></label>
					</div>
					<div className="clear"></div>
					<div className="col-1-2">
						<label><input placeholder="1-808-000-0000" type="tel" /></label>
					</div>



				    <div className="clear"></div>
				    <div className="col-1-2">
				    	<label><input className="btn" type="submit" value="Submit"/></label>
				    </div>
				    <div className="clear"></div>
				</form>
			    <br/>
			    <br/>
			    <br/>
			</div>
		);
	}
}