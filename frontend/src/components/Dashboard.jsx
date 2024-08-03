import AllCharts from "./charts/AllCharts";
import { Typography } from "antd";
const { Title } = Typography;

export default function Dashboard() {
	return (
		<>
			<Title>Dashboard</Title>
			<AllCharts />
		</>
	);
}
