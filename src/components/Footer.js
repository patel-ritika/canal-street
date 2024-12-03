import React from 'react';
import pencil from "../asset/images/footer_pencil.jpg";
import facebook from "../asset/images/footer_facebook.png";
import instagram from "../asset/images/footer_instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
			<div className="footer-container md:mt-32 md:mb-8 mt-20 md:p-0 p-6">
				<div className="footer-title">
					<div className="md:flex md:flex-col md:items-center footer-title-content">
						<h1 className="md:text-4xl md:mb-5 text-2xl font-mono">Interested in becoming a vendor?</h1>
						<button className="border border-black px-6 py-2 font-mono md:w-auto w-full md:mt-0 mt-4">
							click here
						</button>
					</div>
				</div>
				<div className="md:flex md:justify-between md:items-center footer-icons md:mt-20 font-mono">
					<div className="border-4 border-dashed border-black md:px-32 md:py-20 md:flex md:items-center md:flex-col md:hover:border-gradient md:m-0 mb-4 px-5 py-10">
						<img src={pencil} className="md:mb-4" />
						<p>Follow us on Email us</p>
					</div>
					<div className="border-4 border-dashed border-black md:px-32 md:py-20 md:flex md:items-center md:flex-col md:hover:border-gradient md:m-0 mb-4 px-5 py-10">
						<img src={facebook} className="md:mb-4" />
						<p>Follow us on facebook</p>
					</div>
					<div className="border-4 border-dashed border-black md:px-32 md:py-20 md:flex md:items-center md:flex-col md:hover:border-gradient md:m-0 mb-4 px-5 py-10">
						<img src={instagram} className="md:mb-4" />
						<p>Follow us on instagram</p>
					</div>
				</div>
				<div className="md:flex mt-20 p-10 md:justify-between border-2 border-dashed border-black font-mono relative">
					<h1 className="text-xl">Stay up to date with our newsletter</h1>
					<input
						type="text"
						placeholder="  Email"
						className="border border-black px-4 py-2 bg-transparent placeholder-black md:w-4/12 w-full"
					/>{" "}
					<FontAwesomeIcon
						icon={faAngleRight}
						className="absolute md:bottom-14 md:right-11 text-black md:mr-4 hidden"
					/>
				</div>
				<div className="flex flex-wrap mt-10 justify-between text-lg font-mono md:font-bold ">
					<p>Copyright Canal Street Market 2024</p>
					<p className="underline ">Privacy policy</p>
					<p className="underline">Vendor login</p>
				</div>
			</div>
		</>
  );
}