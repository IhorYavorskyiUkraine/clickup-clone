import { useState, useEffect, useRef } from "react";

const DropdownItem = ({item, children}) => {

	const [active, setActive] = useState(false);

	let menuRef = useRef();

	useEffect(() => {

		let handler = e => {
			if(!menuRef.current.contains(e.target)) {
				setActive(false);
			}
		}

		document.addEventListener('mousedown', handler);

		return() => {
			document.removeEventListener('mousedown', handler);
		}
	}, [])

	return (
		<>
			<li className="menu__item" ref={menuRef}>
				<button onClick={() => setActive(!active)} className="menu__link">{item}</button>
				{active ? children : null}
			</li>
		</>
	);
}

export default DropdownItem;