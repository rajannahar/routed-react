import React from "react";

export class Form extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault();
		console.log({
			name: this.name.value,
			dob: this.dob.value,
			email: this.email.value,
			tel: this.tel.value

		});
	}

	radioClick = (e) => {
		//e.preventDefault();
		console.log(e.target.value);
	}

	render() {
		return (
			<div className="full-width-forms">
			<h1>This is the form</h1>

				<form onSubmit={this.handleSubmit}>
					<div className="col-1-2">
						<label><input placeholder="name" type="name" ref={input => this.name=input} /></label>
					</div>
					<div className="clear"></div>
					<div className="col-1-2">
						<label><input name="dob" placeholder="DOB" type="date" ref={input => this.dob=input}/></label>
					</div>
					<div className="clear"></div>
					
					<div className="col-1-5">
						<label>Gender</label>
					</div>

					<div className="col-1-2">
						<div className="col-1-2">
							<input type="radio" value="MALE" name="gender" ref={input => this.genderMale=input} onChange={this.radioClick} /> Male
						</div>
						<div className="col-1-2">
							<input type="radio" value="FEMALE" name="gender" ref={input => this.genderFemale=input} onChange={this.radioClick} /> Female
						</div>
					</div>

					<div className="clear"></div>

					<div className="col-1-2">
						<label><input placeholder="email" type="email" ref={input => this.email=input} /></label>
					</div>
					<div className="clear"></div>
					<div className="col-1-2">
						<label><input placeholder="1-808-000-0000" type="tel" ref={input => this.tel=input} /></label>
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