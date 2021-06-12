import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">
				{props.title0}
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav mr-auto"></ul>
				<span class="navbar-text">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								{props.title1}{" "}
								<span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								{props.title2}
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								{props.title3}
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								{props.title4}
							</a>
						</li>
					</ul>
				</span>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
	title3: PropTypes.string,
	title4: PropTypes.string,
	title0: PropTypes.string
};
