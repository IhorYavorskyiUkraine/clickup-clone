import { Link } from "react-router-dom";

import Banner from "../header/banner/Banner";
import Header from "../header/Header";
import Tabs from "./tabs/Tabs";
import SaveTime from "./saveTime/SaveTime";
import Improve from "./improve/Improve";

import arrow from "/images/hero/arrow.svg";
import icon from "/images/hero/icon.svg";

import "./Hero.scss"

const HeroComponent = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__content">
					<Link className="hero__label">
						<span>Discover the all-new ClickUp 3.0</span>
						<img src={arrow} alt="arrow"/>
					</Link>
					<h1 className="hero__title title-colored">One app to <br /> replace them all</h1>
					<p className="hero__text"><span>Get everyone working in a single platform</span> designed to manage any type of work.</p>
					<Link to="/" className="hero__link">
						<span>Get Started. It`s FREE</span>
						<img src={arrow} alt="arrow"/>
					</Link>
					<div className="hero__rated">
						<img src={icon} alt="icon"/>
						<p>Rated #1 <span>Collaboration and Productivity</span> product 2024</p>
					</div>
				</div>
			</div>
		</section>
	)
}

const Hero = () => {
	return(
		<>
			<Banner/>
			<Header/>
			<main className="main">
				<HeroComponent/>
				<Tabs/>
				<SaveTime/>
				<Improve/>
			</main>
		</>
	);
}

export default Hero;