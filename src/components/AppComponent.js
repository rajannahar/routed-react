import React from 'react';
import UserList from '../containers/userList';
import UserDetail from '../containers/userDetail';

const AppComponent = () => (
	<div>
		<h4>Username List: </h4>
		<UserList />
		<hr/>
		<h4>User Details: </h4>
		<UserDetail />
	</div>
);

export default AppComponent;

{/*Component - DUMB component which knows nothing about the state
simply returns HTML
*/}