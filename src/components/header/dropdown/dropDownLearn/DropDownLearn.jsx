import { Link } from 'react-router-dom';

import blog from "/images/header/dropdown/blog.svg";
import demos from "/images/header/dropdown/demos.svg";
import partner from "/images/header/dropdown/partner.svg";
import webinar from "/images/header/dropdown/webinar.svg";

import '../DropDown.scss';

const DropDownLearn = () => {

	const DropDownItem = ({children}) => {
		return (
			<button className="dropdown__link"><span>{children}</span></button>
		)
	}

	return (
		<>
			<div className="dropdown">
				<div className='dropdown__grid'>
					<Link className="dropdown__item" to='/blog'>
						<DropDownItem>
							<img src={blog} alt="blog"/>
							<span>Blog</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/demos'>
						<DropDownItem>
							<img src={demos} alt="demos"/>
							<span>Demos</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/partner-services'>
						<DropDownItem>
							<img src={partner} alt="partner"/>
							<span>Partner services</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/webinars'>
						<DropDownItem>
							<img src={webinar} alt="webinar"/>
							<span>Webinars</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/demos'>
						<DropDownItem>
							<img src={demos} alt="demos"/>
							<span>Demos</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/partner-services'>
						<DropDownItem>
							<img src={partner} alt="partner"/>
							<span>Partner services</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/blog'>
						<DropDownItem>
							<img src={blog} alt="blog"/>
							<span>Blog</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/demos'>
						<DropDownItem>
							<img src={demos} alt="demos"/>
							<span>Demos</span>
						</DropDownItem>
					</Link>
					<Link className="dropdown__item" to='/partner-services'>
						<DropDownItem>
							<img src={partner} alt="partner"/>
							<span>Partner services</span>
						</DropDownItem>
					</Link>
				</div>
			</div>
		</>
	)
}

export default DropDownLearn;