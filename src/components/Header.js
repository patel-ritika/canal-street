import React, {useState} from 'react';
import Food from './Food';
import Retail from './Retail';
import Community from './Community';
import Home from './Home';
import headerlogo from "../asset/images/logo.png";

const Header = () => {
    const [active, setActive] = useState("home");
  return (
    <div className="md:fixed md:top-0 md:right-0 md:h-full md:w-full md:flex md:justify-end hidden">
			{/* Home Section */}
			<div
				className={`bg-white-500 h-full w-16 flex relative justify-center  items-center cursor-pointer ${active === "home" && "hidden"
					}`}
				onClick={() => setActive("home")}
			>
				<img src={headerlogo} alt="headerlogo" className="absolute top-20" />
			</div>
			{active === "home" && <Home />}
			{/* Food Section */}
			<div
				className={`bg-blue-500 h-full w-16 flex relative justify-center  items-center cursor-pointer ${active === "food" && "hidden"
					}`}
				onClick={() => setActive("food")}
			>
				<p className="absolute top-20 font-semibold">餐饮</p>
				<p className="text-black text-lg font-semibold rotate-90 text-10 tracking-wider">
					Food
				</p>
			</div>
			{active === "food" && <Food />}
			{/* Retail Section */}
			<div
				className={`bg-red-500 h-full w-16 flex relative justify-center items-center cursor-pointer ${active === "retail" && "hidden"
					}`}
				onClick={() => setActive("retail")}
			>
				<p className="absolute top-20 font-semibold">購物</p>
				<p className="text-black text-lg font-semibold rotate-90 text-10 tracking-wider">
					Retail
				</p>
			</div>
			{active === "retail" && <Retail />}
			{/* Community Section */}
			<div
				className={`bg-yellow-500 h-full w-16 flex relative justify-center items-center cursor-pointer ${active === "community" && "hidden"
					}`}
				onClick={() => setActive("community")}
			>
				<p className="absolute top-20 font-semibold">文化</p>
				<p className="text-black text-lg font-semibold rotate-90 text-10 tracking-wider">
					Community
				</p>
			</div>{" "}
			{active === "community" && <Community />}
		</div>
  );
}

export default Header;
