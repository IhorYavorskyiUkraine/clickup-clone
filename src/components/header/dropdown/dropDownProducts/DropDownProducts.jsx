import { Link } from 'react-router-dom';

import task from "/images/header/dropdown/tasks.svg";
import goal from "/images/header/dropdown/goal.svg";
import portfolio from "/images/header/dropdown/portfolio.svg";
import dashboard from "/images/header/dropdown/dashboard.svg";


import '../DropDown.scss';

const DropDownProducts = () => {

	const DropDownItem = ({children}) => {
		return (
			<button className="dropdown__link"><span>{children}</span></button>
		)
	}

	return (
		<>
			<div className="dropdown">
				<div className='dropdown__grid'>
					<Link className="dropdown__item" to='/tasks'>
						<DropDownItem>
							<img src={task} alt="task"/>
							<span>Tasks</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/portfolios'>
						<DropDownItem>
							<img src={portfolio} alt="portfolio"/>
							<span>Portfolios</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/goals'>
						<DropDownItem>
							<img src={goal} alt="goal"/>
							<span>Goals</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/dashboards'>
						<DropDownItem>
							<img src={dashboard} alt="dashboard"/>
							<span>Dashboards</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/goals'>
						<DropDownItem>
							<img src={goal} alt="goal"/>
							<span>Goals</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/dashboards'>
						<DropDownItem>
							<img src={dashboard} alt="dashboard"/>
							<span>Dashboards</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/portfolios'>
						<DropDownItem>
							<img src={portfolio} alt="portfolio"/>
							<span>Portfolios</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/goals'>
						<DropDownItem>
							<img src={goal} alt="goal"/>
							<span>Goals</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/dashboards'>
						<DropDownItem>
							<img src={dashboard} alt="dashboard"/>
							<span>Dashboards</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/portfolios'>
						<DropDownItem>
							<img src={portfolio} alt="portfolio"/>
							<span>Portfolios</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/goals'>
						<DropDownItem>
							<img src={goal} alt="goal"/>
							<span>Goals</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/dashboards'>
						<DropDownItem>
							<img src={dashboard} alt="dashboard"/>
							<span>Dashboards</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/goals'>
						<DropDownItem>
							<img src={goal} alt="goal"/>
							<span>Goals</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/dashboards'>
						<DropDownItem>
							<img src={dashboard} alt="dashboard"/>
							<span>Dashboards</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/goals'>
						<DropDownItem>
							<img src={goal} alt="goal"/>
							<span>Goals</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/dashboards'>
						<DropDownItem>
							<img src={dashboard} alt="dashboard"/>
							<span>Dashboards</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/portfolios'>
						<DropDownItem>
							<img src={portfolio} alt="portfolio"/>
							<span>Portfolios</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/goals'>
						<DropDownItem>
							<img src={goal} alt="goal"/>
							<span>Goals</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/dashboards'>
						<DropDownItem>
							<img src={dashboard} alt="dashboard"/>
							<span>Dashboards</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/portfolios'>
						<DropDownItem>
							<img src={portfolio} alt="portfolio"/>
							<span>Portfolios</span>
						</DropDownItem>
					</Link>
				</div>
			</div>
		</>
	)
}

export default DropDownProducts;