import { Link } from 'react-router-dom';

import it from "/images/header/dropdown/it.svg";
import management from "/images/header/dropdown/management.svg";
import sales from "/images/header/dropdown/sales.svg";
import marketing from "/images/header/dropdown/marketing.svg";

import '../DropDown.scss';

const DropDownSolutions = () => {

	const DropDownItem = ({children}) => {
		return (
			<button className="dropdown__link"><span>{children}</span></button>
		)
	}

	return (
		<>
			<div className="dropdown">
				<div className='dropdown__grid'>
					<Link className="dropdown__item" to='/project-management'>
						<DropDownItem>
							<img src={management} alt="management"/>
							<span>Project management</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/it'>
						<DropDownItem>
							<img src={it} alt="it"/>
							<span>IT</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/sales'>
						<DropDownItem>
							<img src={sales} alt="sales"/>
							<span>Sales</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/marketing'>
						<DropDownItem>
							<img src={marketing} alt="marketing"/>
							<span>Marketing</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/it'>
						<DropDownItem>
							<img src={it} alt="it"/>
							<span>IT</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/sales'>
						<DropDownItem>
							<img src={sales} alt="sales"/>
							<span>Sales</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/marketing'>
						<DropDownItem>
							<img src={marketing} alt="marketing"/>
							<span>Marketing</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/it'>
						<DropDownItem>
							<img src={it} alt="it"/>
							<span>IT</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/project-management'>
						<DropDownItem>
							<img src={management} alt="management"/>
							<span>Project management</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/it'>
						<DropDownItem>
							<img src={it} alt="it"/>
							<span>IT</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/marketing'>
						<DropDownItem>
							<img src={marketing} alt="marketing"/>
							<span>Marketing</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/it'>
						<DropDownItem>
							<img src={it} alt="it"/>
							<span>IT</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/it'>
						<DropDownItem>
							<img src={it} alt="it"/>
							<span>IT</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/marketing'>
						<DropDownItem>
							<img src={marketing} alt="marketing"/>
							<span>Marketing</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/it'>
						<DropDownItem>
							<img src={it} alt="it"/>
							<span>IT</span>
						</DropDownItem>
					</Link>
				</div>
			</div>
		</>
	)
}

export default DropDownSolutions;