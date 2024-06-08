import { useState } from "react";
import Button from "./Button";

const Options = () => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<div className="flex items-center justify-between px-2 my-8">
			<div className="border-2 border-blue-900 w-12 h-7 rounded-full py-2 px-1 items-center flex">
				<p
					onClick={
						isClicked ? () => setIsClicked(false) : () => setIsClicked(true)
					}
					className={` ${
						isClicked ? "transform translate-x-5" : "transform translate-x-0 "
					} bg-blue-950 w-4 h-4 rounded-full transition-transform duration-400`}
				></p>
			</div>
			<p className="text-sm text-blue-950 font-bold mr-12">Stay signed in</p>
			<Button />
		</div>
	);
};

export default Options;
