import Banner from "../header/banner/Banner";
import Header from "../header/Header";

const Hero = () => {
  	return(
		<>
			<Banner/>
			<Header/>
			<main className="main">
				<section className="hero">
					<div className="container">
						{/* <div className="asd title"><span className="title-color">One app to <br />replace them all</span></div> */}
					</div>
				</section>
			</main>
		</>
  	);
}

export default Hero;