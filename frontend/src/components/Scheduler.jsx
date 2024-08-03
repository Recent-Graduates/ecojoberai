import { Typography } from "antd";
const { Title } = Typography;
import JobsTable from "./jobs/JobsTable";
import MachinesTables from "./machines/MachinesTable";
import NewJob from "./jobs/NewJob";

export default function Scheduler() {
	return (
		<>
			<Title>Scheduler</Title>
			<NewJob />
			<JobsTable />
			<MachinesTables />
		</>
	);
}
