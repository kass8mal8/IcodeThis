import avatar from "../assets/images/image-avatar.png";

const Profile = () => {
	return (
		<div className="flex items-center my-4">
			<img src={avatar} alt="avatar" className="w-13 h-14 rounded-xl" />
			<div className="p-2 ml-4">
				<p className="text-cyan-800 font-semibold text-sm">Business Account</p>
				<h5 className="text-cyan-950 font-bold ">Conor Brigs</h5>
			</div>
		</div>
	);
};

export default Profile;
