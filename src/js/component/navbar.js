import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<div className="d-flex justify-content-around bg-dark mb-3">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="p-2 mr-5">
					<a className="navbar-brand" href="#">
						{props.title0}
					</a>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="p-2 ml-5">
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav mr-auto"></ul>
						<span className="navbar-text">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">
										{props.title1}{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										{props.title2}
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										{props.title3}
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										{props.title4}
									</a>
								</li>
							</ul>
						</span>
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
	title4: PropTypes.string,
	title0: PropTypes.string
};
