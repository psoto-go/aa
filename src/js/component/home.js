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
				title0="Start Bootstrap"
				title1="Home"
				title2="About"
				title3="Services"
				title4="Contact"
			/>
			<div className="container">
				<Jumbotron
					title="A Warm Welcome"
					buttom="Call to action!"></Jumbotron>
				<div className="row row-cols-4">
					<div className="col mr-0">
						<Card
							link="https://css.adelgazarencasa.co/wp-content/uploads/2019/10/rabanos-500x325.jpg"
							title="Onion"
							buttom="Find out more"></Card>
					</div>
					<div className="col">
						<Card
							link="https://www.edigar.com.mx/wp-content/uploads/2014/10/Sandia-500x325.jpg"
							title="Watermelon"
							buttom="Click me to out more"></Card>
					</div>
					<div className="col">
						<Card
							link="https://mejorconsalud.as.com/wp-content/uploads/2013/11/Pi%C3%B1a_p-500x325.jpg"
							title="Pineapple"
							buttom="Find out more rigth"></Card>
					</div>
					<div className="col">
						<Card
							link="https://www.medicinaortomolecular.com.mx/wp-content/uploads/2014/07/Manzana-adelgazar-500x325.jpg"
							title="Apple"
							buttom="Find out more"></Card>
					</div>
				</div>
			</div>
			<Footer copi="Copyright © Your Website"></Footer>
		</div>
	);
}
