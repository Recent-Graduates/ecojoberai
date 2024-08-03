import { Link } from "react-router-dom";
import Constants from "../util/Constants";
import { Menu } from "antd";
const items = [
	{
		key: "home",
		label: (
			<>
				<Link to={`${Constants.BASE_PATH}/`}>Home</Link>
			</>
		),
	},
	{
		key: "scheduler",
		label: (
			<>
				<Link to={`${Constants.BASE_PATH}/scheduler`}>Scheduler</Link>
			</>
		),
	},
];
export default function Header() {
	return <Menu items={items} mode="horizontal" />;
}
