import React from 'react';
import headerlogo from "../asset/images/logo.png";
import home_img from "../asset/images/home-image.jpg";
import NewKindMarketSection from "./HomeComponents/NewKindMarketSection";
import MarketEventSection from "./HomeComponents/MarketEventSection";
import Footer from './Footer';

const Home = () => {
  return (
    <>
			<div className="home-container md:overflow-auto pt-20">
				<div className="md:px-20">
					<img src={headerlogo} alt="headerlogo" className="md:fixed md:block hidden" />
					<div className="header-title p-6">
						<h1 className="md:text-7xl md:w-7/12 md:pt-60 font-ogg md:leading-tight text-4xl">
							Canal Street Market is a carefully curated retail market, food
							hall & community space open year-round at 265 Canal Street.{" "}
							<span>Support Small Business </span>this weekend!
						</h1>
					</div>{" "}
				</div>
				<div className="md:mt-20 home-img-container">
					<img src={home_img} className="1/2"/>
				</div>
				<NewKindMarketSection />
				<MarketEventSection />
				<div className="md:p-20">
					<Footer />
				</div>
			</div>

		</>
  );
}

export default Home;
