import { Link } from 'react-router-dom';

import './DropDown.scss';

const DropDownNest = () => {

	const DropDownItem = ({children}) => {
		return (
			<button className="dropdown__link"><span>{children}</span></button>
		)
	}

	return (
		<>
			<div className="dropdown">
				<Link to='/flowers'>
					<DropDownItem>Flowers</DropDownItem>
				</Link>
				<DropDownItem>Fruits</DropDownItem>
				<DropDownItem>Aboba</DropDownItem>
				<DropDownItem>Glek</DropDownItem>
			</div>
		</>
	)
}

export default DropDownNest;