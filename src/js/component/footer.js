import React from "react";
import PropTypes from "prop-types";

export const Footer = props => {
	return (
		<footer className="bg-dark h-25 p-4 mt-3">
			<div className="row">
				<div className="w-100">
					<p className="text-light text-center bg-dark">
						{props.copi}
					</p>
				</div>
			</div>
		</footer>
	);
};

Footer.propType = {
	copi: PropTypes.string
};
