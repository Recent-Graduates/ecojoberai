import { Link } from "react-router-dom";
import Constants from "../util/Constants";
export default function Header() {
	return (
		<>
			<Link to={`${Constants.BASE_PATH}/`}>Home</Link>
			<Link to={`${Constants.BASE_PATH}/scheduler`}>Scheduler</Link>
		</>
	);
}
