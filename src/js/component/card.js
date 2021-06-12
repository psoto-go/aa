import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "16rem" }}>
			<img src={props.link} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the content.
				</p>
				<a href="#" className="btn btn-primary">
					{props.buttom}
				</a>
			</div>
		</div>
	);
};

Card.proptype = {
	link: PropTypes.string,
	title: PropTypes.string,
	buttom: PropTypes.string
};
