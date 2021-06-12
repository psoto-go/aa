import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<div className="d-flex justify-content-around">
			<nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark container-fluid">
				<div>
					<a className="navbar-brand text-white" href="#">
						Navbar
					</a>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link text-white" href="#">
							{props.title1}
						</a>
						<a className="nav-link text-white" href="#">
							{props.title2}
						</a>
						<a className="nav-link text-white" href="#">
							{props.title3}
						</a>
						<a className="nav-link text-white" href="#">
							{props.title4}
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
	title3: PropTypes.string,
	title4: PropTypes.string
};
