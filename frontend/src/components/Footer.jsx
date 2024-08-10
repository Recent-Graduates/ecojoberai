import { Link } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons"; // Ant Design GitHub icon
import { Typography } from "antd";

const { Paragraph } = Typography;

export default function Footer() {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "10px",
			}}
		>
			<Paragraph style={{ margin: 0 }}>
				<span style={{ marginRight: "8px" }}>Copyright ©Hacknosis 2024</span>
			</Paragraph>
			<Link
				to="https://github.com/Recent-Graduates/ecojoberai"
				target="_blank"
				style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
			>
				<GithubOutlined style={{ fontSize: "16px", marginRight: "4px" }} />
				GitHub
			</Link>
		</div>
	);
}
