import React from "react";

//include images into your bundle
import { NavBar } from "./Navbar";
import { Head } from "./Head";
import { Card } from "./Card";
import { Footerr } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<header>
				<NavBar/>
				<Head/>
			</header>
			<section className="flex-grow-1 d-flex align-items-center">
				<div className="container-fluid">
					<div className="row">
						<Card/>
						<Card/>
						<Card/>
						<Card/>
					</div>
				</div>
			</section>

			<footer className="bg-dark">
				<Footerr/>
			</footer>
		</div>
	);
};

export default Home;