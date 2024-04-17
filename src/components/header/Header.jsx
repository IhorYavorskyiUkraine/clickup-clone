import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactDOM from "react-dom"

import BurgerMenu from "../burgerMenu/BurgerMenu"
import MenuBody from "./dropdown/Menu";
import DropdownItem from "./dropdown/DropdownItem";
import DropDownProducts from './dropdown/dropDownProducts/DropDownProducts';
import DropDownSolutions from './dropdown/dropDownSolutions/DropDownSolutions';
import DropDownLearn from './dropdown/dropDownLearn/DropDownLearn';

import logo from '/images/header/logo.svg';
import arrow from "/images/header/arrow.svg";

import './Header.scss'

const Header = () => {

	const [isSticky, setIsSticky] = useState(false);
	
	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setIsSticky(scrollTop > 25);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return(
		<>
			<header className="header" style={ isSticky ? {top: '0'} : null }>
				<div className="container">
					<div className="header__menu menu">
						<span>
							<Link to="/" className="menu__logo">
								<img src={logo} alt="logo"/>
							</Link>
						</span>
						<MenuBody>
							<DropdownItem item={'Product'} arrow={arrow}>
								<DropDownProducts/>
							</DropdownItem>
							<DropdownItem item={'Solutions'} arrow={arrow}>
								<DropDownSolutions/>
							</DropdownItem>
							<DropdownItem item={'Learn'} arrow={arrow}>
								<DropDownLearn/>
							</DropdownItem>
							<Link to='/pricing'>
								<DropdownItem item={'Pricing'}/>
							</Link>
							<Link to='/enterprise'>
								<DropdownItem item={'Enterprise'}/>
							</Link>
						</MenuBody>
						<div className="menu__buttons">
							<Link to="/contact" className="menu__contact">Contact Sales</Link>
							<Link to="/signup" className="menu__signup"><span>Sing Up</span></Link>
							<div className='menu__burger'>
								<BurgerMenu/>
							</div>
							<Link to="/login" className="menu__login"><span>Log In</span></Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;