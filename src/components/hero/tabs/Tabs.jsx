import { useState } from 'react';

import icon from '/images/hero/slider/1.svg'

import './Tabs.scss'

const SliderTabs = () => {

	const [transform, setTransform] = useState('translateX(0px)');

	const [active, setActive] = useState(false);

	const style = {
		transform: 'translateX(0px)',
		transition: 'transform 0.5s ease-in-out'
	}

	const changeTranslate = () => {
		style.transform = 'translateX(87px)';
		// console.log(style.transform);
	};

	return(
		<>
		<div className="tabs">TabSlider</div>
			{/* <section className="slider">
				<div className="container">
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						overflow: 'hidden',
					}} className="slider__wrapper">
						<div style={style}>
							<div className="slider__navItems navItems">
								<button
								onClick={changeTranslate}
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
								<button 
									className="navItems__item">
										<img src={icon} alt="icon"/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
}

export default SliderTabs;