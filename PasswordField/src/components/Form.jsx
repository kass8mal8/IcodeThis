import lock from "../assets/images/lock.png";
import visibility_on from "../assets/images/visibility-on.png";
import visibility_off from "../assets/images/visibility-off.png";
import { useState } from "react";
import Options from "./Options";

const Form = () => {
	const [isVisible, setIsVisible] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="my-3" onSubmit={handleSubmit}>
			<label
				htmlFor="password"
				className="text-cyan-800 font-bold text-sm ml-2"
			>
				Password
			</label>
			<div className="space-x-2 flex items-center relative">
				<img src={lock} alt="lock" className="w-5 h-5 absolute left-4" />
				<input
					type={isVisible ? "text" : "password"}
					className="p-3 text-cyan-600 caret-cyan-600 pl-8 border block outline-cyan-600 rounded-md "
				/>
				{isVisible ? (
					<img
						src={visibility_on}
						alt="on"
						onClick={() => setIsVisible(false)}
						className="w-5 h-5"
					/>
				) : (
					<img
						src={visibility_off}
						alt="off"
						onClick={() => setIsVisible(true)}
						className="w-5 h-5"
					/>
				)}
			</div>
			<Options />
		</form>
	);
};

export default Form;
