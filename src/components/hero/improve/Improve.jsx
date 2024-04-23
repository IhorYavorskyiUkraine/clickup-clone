import { useState, useEffect } from "react";
import { db } from "../../../server/db";
import { motion } from "framer-motion";

import Slider from "./Slider";

import './Improve.scss';

const Improve = () => {

	const [tabslist, setTabslist] = useState([]);
	const [active, setActive] = useState(false);
	const [currentImage, setCurrentImage] = useState("");
	const [currentSubImage, setCurrentSubImage] = useState("");

	useEffect(() => {
		setTabslist(db[0].tabs);
		setActive(db[0].tabs[0]?.id || null);
		setCurrentImage(db[0].tabs[0]?.image || "");
		setCurrentSubImage(db[0].tabs[0]?.subImage || "");
	}, []);

	const toggleTab = (tabId, imageURL, subImageURL) => {
		setActive(tabId === active ? null : tabId);
		setCurrentImage(imageURL);
		setCurrentSubImage(subImageURL);
	};

	const renderTabs = () => {
		return tabslist.map(tab => (
			<li key={tab.id} className="improve__tab tab">
				<h3 
					onClick={() => toggleTab(tab.id, tab.image, tab.subImage)} 
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
						<div className="improve__column">
							<div className="improve__images">
								<motion.img 
									className="improve__image"
									key={currentImage}
									src={currentImage}
									alt="image"
									initial={{y: 20, opacity: 0}}
									animate={{y: 0 , opacity: 1}}
									transition={{duration: .1}}
									viewport={{once: true}}/>
								<motion.img 
									className="improve__subImage" 
									key={currentSubImage}
									src={currentSubImage}
									alt="image"
									initial={{y: 20, opacity: 0}}
									animate={{y: 0 , opacity: 1}}
									transition={{duration: .2}}
									viewport={{once: true}}/>
							</div>
						</div>
						<Slider/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Improve;