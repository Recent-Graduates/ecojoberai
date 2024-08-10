import { Link } from "react-router-dom";
import Constants from "../util/Constants";
import { Menu } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
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
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				padding: "0 20px",
				width: "100%",
				boxSizing: "border-box",
			}}
		>
			<Title level={3} style={{ margin: 0, flexShrink: 0 }}>
				🌍
				<span style={{ color: "rgba(0, 227, 150, 0.85)" }}>Eco</span>
				<span style={{ color: "rgba(0, 143, 251, 0.85)" }}>Jober</span>
				<span style={{ color: "rgba(0, 0, 0, 0.88)" }}>.ai</span>
			</Title>
			<Menu items={items} mode="horizontal" style={{ flex: 1, marginLeft: "20px" }} />
		</div>
	);
}
