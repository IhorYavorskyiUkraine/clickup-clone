import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "/images/header/banner/logo.svg";

import './Banner.scss'

const Banner = () => {

	const [close, setClose] = useState(false);

	return(
		<>
			<aside style={ close ? {display: 'none'} : null} className="banner">
				<div className="banner__content">
					<div className="banner__info">
						<img src={logo} className="banner__image" alt="logo"/>
						<p className="banner__text">Connect all your tasks, docs, people, and knowledge with ClickUp Brain</p>
						<Link to="/" className="banner__link"><span>Discover Brain</span></Link>
					</div>
					<button 
						onClick={() => setClose(true)} 
						className="banner__close">
							<div className="banner__icon"></div>
					</button>
				</div>
			</aside>
		</>
	);
}

export default Banner;