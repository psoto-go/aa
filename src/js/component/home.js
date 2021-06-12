import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Card } from "./card.js";
import { Jumbotron } from "./jumbotron.js";
import { Footer } from "./footer.js";
//create your first component
export function Home() {
	return (
		<div>
			<Navbar
				title1="Home"
				title2="About"
				title3="Services"
				title4="Contact"
			/>
			<div className="container">
				<Jumbotron
					title="A Warm Welcome"
					buttom="Call to action!"></Jumbotron>
				<Card></Card>
			</div>
			<Footer></Footer>
		</div>
	);
}
