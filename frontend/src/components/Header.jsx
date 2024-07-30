import { Link } from "react-router-dom";
export default function Header() {
	return (
		<>
			<Link to={"/"}>Home</Link>
			<Link to={"/scheduler"}>Scheduler</Link>
		</>
	);
}
