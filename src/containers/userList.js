import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {

	createListItems() {
		return this.props.users.map((user) => {
			return (
				<li 
				key={user.id}
				onClick={() => this.props.selectUser(user)}
				>
				{user.first} {user.last}</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{this.createListItems()}
			</ul>
		);
	}

}
{/*
Component (dumb so far) which return basic HTML
*/}


function mapStateToProps(state) {
	return {
		users: state.users
	};
}
{/*
mapStateToProps - this maps part of the store (data) to this component
makes this a Smart Component (aka Container)

Here we are only passing in part of the state (data) into this component, 
this data forms the props of this component!

Dont need to pass in the whole store
*/}


function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectUser: selectUser
	}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(UserList);

{/*
Connect - maps the state props to the component
			making this a SMART component
			aka Container
*/}