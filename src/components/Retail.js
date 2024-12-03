import React from 'react';
import retail from "../asset/images/homeSectionImgs/newMarketImg2.jpg";
import leftemoji from "../asset/images/retail_left_flower.png";
import rightemoji from "../asset/images/retail_left_flower.png";
import Footer from './Footer';

const Retail = () => {
    const foodData = [
		{
			title: "Design Objects",
			content: "American Design Club",
		},
		{
			title: "Jewelry",
			content: "Beeshaus & Raum NYC",
		},
		{
			title: "Jewelry",
			content: "Beroep Tech",
		},
		{
			title: "Bonsai Shop",
			content: "Dandy Farmer Bonsai Shop",
		},
		{
			title: "Fashion Apparel",
			content: "Friend Of A Friend Studio",
		},
		{
			title: "Design Objects",
			content: "Leibal",
		},
		{
			title: "K Pop Apparel and Merchandise",
			content: "Mandu Apparel",
		},
		{
			title: "Home Goods",
			content: "Mogutable",
		},
		{
			title: "Jewelry",
			content: "Mottive",
		},
		{
			title: "Newstand and Magazines",
			content: "Office Magazine Newstand",
		},
		{
			title: "Fashion Apparel",
			content: "Preppy Trendy",
		},
		{
			title: "Sunglasses",
			content: "Savage Anchor",
		},
		{
			title: "Jewelry",
			content: "Seven 50",
		},
		{
			title: "Sustainable lifestyle store",
			content: "Siizu",
		},
		{
			title: "Jewelry",
			content: "Swagychic",
		},
	];
  return (
    <>
			<div className="bg-red-500 w-full food-container md:pt-80 md:px-20 md:overflow-auto pt-24 px-6">
				<div className="md:flex md:flex-wrap md:justify-between">
					<p className="text-right font-mono	font-medium md:hidden">
						Retail Market Hours:
						<br />
						Thurs – Sun: 11:00AM - 7:00PM
					</p>
					<div className="md:w-7/12">
						{" "}
						<h1 className="font-serif md:text-9xl food-title md:m-0 mt-4">
							The Retail Market
						</h1>
					</div>
					<div className="md:relative md:text-right ">
						<img src={retail} className="md:max-w-96 " />
						<span className="absolute md:top-[-40px] md:right-[-60px] -bottom-10 right-10 font-bold z-10 text-6xl">
							餐饮
						</span>
						<p className="md:absolute md:top-[-150px] md:right-[-30px] md:text-right font-mono md:block hidden font-medium">
							Retail Market Hours:
							<br />
							Thurs – Sun: 11:00AM - 7:00PM
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

export default Retail;
