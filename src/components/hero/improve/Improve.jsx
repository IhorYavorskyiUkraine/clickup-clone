import { useState, useEffect } from "react";
import { db } from "../../../server/db";

import './Improve.scss'

const Improve = () => {

	const [tabslist, setTabslist] = useState([]);
	const [active, setActive] = useState(false);

	useEffect(() => {
		setTabslist(db[0].tabs);
		setActive(db[0].tabs[0]?.id || null);
	}, []);

	const toggleTab = (tabId) => {
		setActive(tabId === active ? null : tabId);
	};

	const renderTabs = () => {
		return tabslist.map(tab => (
			<li key={tab.id} className="improve__tab tab">
				<h3 
					onClick={() => toggleTab(tab.id)} 
					className={`tab__title ${active === tab.id ? 'title-colored' : ''}`}>{tab.title}</h3>
				{ active === tab.id &&
					(
						<>
							<div className="tab__text">{tab.text}</div>
							<ul className="tab__list">
								{tab.list.map((item, i) => (
									<li key={i} className="tab__item"><span>{item}</span></li>
								))}
							</ul>
						</>
					)
				}
			</li>
		));
	};

	return(
		<>
			<section className="improve">
				<div className="container">
					<div className="improve__content">
						<div className="improve__column">
							<ul className="improve__tabs">
								{renderTabs()}
							</ul>
						</div>
						<div className="improve__column"></div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Improve;