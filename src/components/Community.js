import React from 'react';
import feature from "../asset/images/feature1.avif";
import feature2 from "../asset/images/feature2.avif";
import feature3 from "../asset/images/feature3.avif";
import feature4 from "../asset/images/feature4.webp";
import Footer from './Footer';
import leftemoji from "../asset/images/leftcommunity.webp";
import rightemoji from "../asset/images/leftcommunity.webp";


const Community = () => {
    const features = [
		{ title: "CSM Community - AMDC", imagePath: feature },
		{ title: "CSM Community - Joe's Steam Rice Rolls", imagePath: feature2 },
		{ title: "CSM Community - Bereop Tech", imagePath: feature3 },
		{ title: "CSM Community - Izakaya", imagePath: feature4 },
	];
  return (
    <>
			<div className="bg-yellow-500 w-full food-container md:pt-80 md:px-20 md:overflow-auto pt-24 px-6">
				{" "}
				<div className="md:flex md:flex-wrap md:justify-between">
					<p className="text-right font-mono	font-medium md:hidden">
						Our mixed-use space hosts
						<br /> ongoing events, podcasts <br /> & artists in residence
					</p>
					<div className="md:w-7/12">
						{" "}
						<h1 className=" font-serif md:text-9xl food-title">
							Canal St. Community
						</h1>
					</div>
					<div className=" md:relative md:text-right">
						<span className=" md:text-6xl">文化</span>
						<p className="absolute top-[-200px] right-[-30px] font-mono	font-medium w-[32rem] md:block hidden">
							Our mixed-use space hosts
							<br /> ongoing events, podcasts <br /> & artists in residence
						</p>
					</div>
				</div>
				<div className="md:grid md:grid-cols-3 md:gap-40 md:mt-44 font-mono md:text-center single-events__item_bottom md:pb-0">
					<div className="md:text-left text-center">
						<div className="single-events__item md:hidden ">
							<h1 className="md:text-8xl text-5xl">Market Events</h1>
						</div>
						<div className="single-events__item">
							<span>09/21 (past)</span>
							<h2 className="text-lg">Small Business Retail Pop Up Weekend!</h2>
						</div>
						<div className="single-events__item">
							<span>12/11 (past)</span>
							<h2 className="text-lg">Hack City 12/11</h2>
						</div>
					</div>
					<div className="single-events__item md:block hidden">
						<h1 className="text-8xl">Market Events</h1>
					</div>
					<div className="md:text-left text-center">
						<div className="single-events__item">
							<span>02/07 (past)</span>
							<h2 className="text-lg">
								New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
							</h2>
						</div>
						<div className="single-events__item">
							<span>07/27 (past)</span>
							<h2 className="text-lg">Taiwanese Wave</h2>
						</div>
					</div>
				</div>{" "}
				<div className="w-full text-center border border-black py-4 mt-8 hover:bg-black hover:text-white">
					View All
				</div>
				<div className="my-16 single_feature">
					<h1 className="md:text-7xl text-5xl font-mono mb-7">Features</h1>
					<div className="md:grid md:grid-cols-2 md:gap-14 md:gap-y-28">
						{features.map((feature, index) => (
							<div key={index} className="md:relative featureimg md:m-0 mb-5">
								<img
									src={feature.imagePath}
									alt={feature.title}
									className="w-full h-full md:object-cover"
								/>
								<h1 className="md:absolute bg-white p-6 md:text-5xl text-xl font-mono md:bottom-[-50px]">
									{feature.title}
								</h1>
							</div>
						))}
					</div>
				</div>
				<div className="w-full text-center border border-black py-4 my-20 hover:bg-black hover:text-white">
					view all stories
				</div>{" "}
				<div className="md:flex md:justify-between text-center single-announcement md:mt-20">
					<div className="md:mb-0 mb-10">
						<img src={leftemoji} className="md:h-52 leftemoji" />
					</div>
					<div className="md:w-96 md:text-center ">
						<h1 className="md:text-8xl text-5xl font-mono md:mb-10 ">The Best of NYC</h1>
						<p className="font-mono md:text-2xl">All under one roof!</p>
					</div>
					<div className="md:mt-0 mt-10">
						{" "}
						<img src={rightemoji} className=" md:h-52 rightemojicommunity" />
					</div>
				</div>
				<div className="md:grid md:grid-cols-3 md:gap-8 md:text-center mt-20  single-radio__row">
					<div className="font-mono md:m-0 mb-5">
						<span>11/19</span>
						<p>S4E19: Asian Layoff Friends</p>
					</div>{" "}
					<div className="font-mono md:m-0 mb-5">
						<span>11/19</span>
						<p>S4E19: Asian Layoff Friends</p>
					</div>
					<div className="font-mono md:m-0 mb-5">
						<span>11/19</span>
						<p>S4E19: Asian Layoff Friends</p>
					</div>
				</div>
				<Footer />
			</div>
            </>
  );
}

export default Community;
