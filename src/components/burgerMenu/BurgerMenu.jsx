import { useState } from 'react';
import { Link } from 'react-router-dom';

import icon from '/images/header/burger/icon.svg';
import close from '/images/header/burger/close.svg';

import './BurgerMenu.scss';

const BurgerMenu = () => {

	const [lock, setLock] = useState(false);

	const handleLock = () => {
		setLock(!lock)
		lock ? document.body.classList.remove('lock') :document.body.classList.add('lock');
	}

	return(
		<>
			<div  className="burger">
				<div onClick={handleLock} className="burger__icon">
					<img src={icon} alt="icon"/>
				</div>
				<div className={ lock ? "burger__overlay" :  "burger__overlay hidden"}>
					<div className="burger__buttons">
						<div className="burger__links">
							<Link to="/" className="burger__singup"><span>Sign Up</span></Link>
							<Link to="/" className="burger__login"><span>Log In</span></Link>
						</div>
						<button onClick={handleLock} className="burger__close">
							<img src={close} alt="close"/>
						</button>
					</div>
					<div className="burger__items">
						<Link id="product" className="burger__item" to="/product">
							<span className="burger__link">Product</span>
						</Link>
						<Link id="solutions" className="burger__item" to="/solutions">
							<span className="burger__link">Solutions</span>
						</Link>
						<Link id="learn" className="burger__item" to="/learn">
							<span className="burger__link">Learn</span>
						</Link>
						<Link id="pricing" className="burger__item" to="/pricing">
							<span className="burger__link">Pricing</span>
						</Link>
						<Link id="enterprise" className="burger__item" to="/enterprise">
							<span className="burger__link">Enterprise</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default BurgerMenu;