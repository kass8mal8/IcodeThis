import Form from "./components/Form";
import Profile from "./components/Profile";

function App() {
	return (
		<div className="shadow-md bg-white rounded-md sm:w-2/3 p-10">
			<h1 className="text-blue-950 text-2xl font-extrabold">
				Enter your password
			</h1>
			<Profile />
			<Form />
		</div>
	);
}

export default App;
