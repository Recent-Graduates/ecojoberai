import { Col, Row, Typography } from "antd";
const { Title } = Typography;
import JobsTable from "./jobs/JobsTable";
import MachinesTables from "./machines/MachinesTable";
import NewJob from "./jobs/NewJob";

export default function Scheduler() {
	return (
		<>
			<Row>
				<Col span={24}>
					<Title>Scheduler</Title>
				</Col>
				<Col span={24}>
					<NewJob />
				</Col>
				<Col span={24}>
					<JobsTable />
				</Col>
				<Col span={24}>
					<MachinesTables />
				</Col>
			</Row>
		</>
	);
}
