import React from 'react';
import foodimg from "../asset/images/homeSectionImgs/newMarketImg3.jpg";
import leftemoji from "../asset/images/food_emoji.png";
import rightemoji from "../asset/images/food_emoji.png";
import Footer from './Footer';

const Food = () => {
    const foodData = [
		{
			title: "Khao Man Gai",
			content: "Betong",
		},
		{
			title: "Coffee, Pastries & Smoothies",
			content: "Chinatown Deli",
		},
		{
			title: "Artisanal Chocolates",
			content: "Daniel Corpuz Chocolatier",
		},
		{
			title: "Chinese Classics",
			content: "Joe's Rice and Noodles",
		},
		{
			title: "Cantonese Steamed Rice Rolls",
			content: "Joe's Steam Rice Roll",
		},
		{
			title: "Delicious Filipino Classics",
			content: "Kabisera",
		},
		{
			title: "Bingsoo Sundaes & Bubble Tea",
			content: "Lazy Sundaes",
		},
		{
			title: "Sushi, Handrolls & Chirashi",
			content: "Mastunori",
		},
		{
			title: "Filipino Inspired Taqueria",
			content: "Mucho Sarap",
		},
	];
  return (
    <>
			<div className="bg-blue-500 w-full food-container md:pt-80 md:px-20 md:overflow-auto pt-24 px-6">
				<div className="md:flex md:flex-wrap md:justify-between">
					<p className="text-right font-mono	font-medium md:hidden">
						Food Hall Hours:
						<br />
						Mon – Sun: 11:00AM - 8:00PM
					</p>
					<div className="md:w-7/12">
						{" "}
						<h1 className="font-serif md:text-9xl food-title md:m-0 mt-4">The Food Hall</h1>
					</div>
					<div className="md:relative md:text-right ">
						<img src={foodimg} className="md:max-w-96 " />
						<span className="absolute md:top-[-40px] md:right-[-60px] -bottom-5 right-10 font-bold z-10 text-6xl">
							餐饮
						</span>
						<p className="md:absolute md:top-[-150px] md:right-[-30px] md:text-right font-mono md:block hidden font-medium">
							Food Hall Hours:
							<br />
							Mon – Sun: 11:00AM - 8:00PM
						</p>
					</div>
				</div>
				<div className="md:grid md:grid-cols-3 md:gap-10 md:mt-20 md:gap-y-24 mt-10">
					{foodData?.map((item, index) => (
						<div key={index} className="md:m-0 mb-5">
							<p className="font-serif md:text-xl md:mb-6">{item?.title}</p>
							<h2 className="font-serif text-3xl font-mono">{item?.content}</h2>
						</div>
					))}
				</div>
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
						<img src={rightemoji} className="md:h-52 rightemoji" />
					</div>
				</div>
				<Footer />
			</div>
            </>
  );
}

export default Food;
