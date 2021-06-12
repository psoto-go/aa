import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{props.buttom}
				</a>
			</p>
		</div>
	);
};

Jumbotron.propTypes = {
	buttom: PropTypes.string,
	title: PropTypes.string
};
