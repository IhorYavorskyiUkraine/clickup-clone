import { Link } from 'react-router-dom';

import Menu from "./dropdown/Menu";
import DropdownItem from "./dropdown/DropdownItem";
import DropDownProducts from './dropdown/dropDownProducts/DropDownProducts';
import DropDownSolutions from './dropdown/dropDownSolutions/DropDownSolutions';
import DropDownLearn from './dropdown/dropDownLearn/DropDownLearn';

import logo from '/images/header/logo.svg';

import './Header.scss'

const Header = () => {
  return(
	<>
		<header className="header">
			<div className="container">
				<div className="header__menu menu">
					<span>
						<Link to="/" className="menu__logo">
							<img src={logo} alt="logo"/>
						</Link>
					</span>
					<Menu>
						<DropdownItem item={'Product'}>
							<DropDownProducts/>
						</DropdownItem>
						<DropdownItem item={'Solutions'}>
							<DropDownSolutions/>
						</DropdownItem>
						<DropdownItem item={'Learn'}>
							<DropDownLearn/>
						</DropdownItem>
						<Link to='/pricing'>
							<DropdownItem item={'Pricing'}/>
						</Link>
						<Link to='/enterprise'>
							<DropdownItem item={'Enterprise'}/>
						</Link>
					</Menu>
					<div className="menu__buttons">
						<Link to="/contact" className="menu__contact">Contact Sales</Link>
						<Link to="/signup" className="menu__signup"><span>Sing In</span></Link>
						<Link to="/login" className="menu__login"><span>Log In</span></Link>
					</div>
				</div>
			</div>
		</header>
	</>
  );
}

export default Header;