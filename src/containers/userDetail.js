import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

	render() {
		if (!this.props.user) {
			return (
				<h4>Select a user...</h4>
			);
		}
		return (
			<div className="userdetails">
				<img src={this.props.user.thumbnail} />
				<h4>{this.props.user.first} {this.props.user.last}</h4>
				<h4>Age: {this.props.user.age}</h4>
				<h4>Description: {this.props.user.description}</h4>
			</div>
		);
	}

}


function mapStateToProps(state) {
	return {
		user: state.activeUser
	};
}

export default connect(mapStateToProps)(UserDetail);