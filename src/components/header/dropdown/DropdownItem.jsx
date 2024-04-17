import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

const DropdownItem = ({item, children, arrow}) => {

	const [active, setActive] = useState(false);

	return (
		<>
			<li className="menu__item">
				<button onClick={() => setActive(!active)} className={`menu__link ${active ? 'active' : ''}`}>
					<span>{item}</span>
					{arrow ? <img src={arrow} style={ active ? {transform: 'rotate(180deg)'} : null} alt="arrow" /> : null}
				</button>
				<OutsideClickHandler  onOutsideClick={() => setActive(false)}>
					{active ? children : null}
				</OutsideClickHandler>
			</li>
		</>
	);
}

export default DropdownItem;