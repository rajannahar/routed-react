import React from "react";

export class Form extends React.Component {
	render() {
		return (
			<div className="full-width-forms">
			<h1>This is the form</h1>

				<form onSubmit={this.handleSubmit}>
					<div className="col-1-2">
						<label><input placeholder="name" type="name"/></label>
					</div>
					<div className="clear"></div>
					<div className="col-1-2">
						<label><input name="dob" placeholder="DOB" type="date"/></label>
					</div>
					<div className="clear"></div>
					
					<div className="col-1-5">
						<label>Gender</label>
					</div>
					<div className="col-1-4">
						<label><input name="name" type="radio"/>Male</label>
					</div>
					<div className="col-1-4">
						<label><input name="name" type="radio"/>Female</label>
					</div>
					<div className="clear"></div>

					<div className="col-1-2">
						<label><input placeholder="email" type="email"/></label>
					</div>
					<div className="clear"></div>
					<div className="col-1-2">
						<label><input placeholder="1-808-000-0000" type="tel"/></label>
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