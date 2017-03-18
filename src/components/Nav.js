import React from "react";
import logo from '../logo.svg';

export class Nav extends React.Component {
	render() {
		return (
			<div className="row header">
				<div className="section">
					<nav>
						<a href="/" className="logo">
						<img src={logo} alt="Logo" /></a>
						<label className="menu-toggle" id="menu-toggle-label"></label>
						<input id="menu-toggle" type="checkbox" />
    					<div className="icon-menu"></div>

						<ul className="menu">
							<li><a href="/">Home</a></li>
							<li><a href="/about">About</a></li>
							<li><a href="/example">Example</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}