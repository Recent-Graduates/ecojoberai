import { Typography } from "antd";
const { Title } = Typography;
import JobsTable from "./jobs/JobsTable";
import MachinesTables from "./machines/MachinesTable";

export default function Scheduler() {
	return (
		<>
			<Title>Scheduler</Title>
			<Title level={2}>Add a job</Title>
			<form>
				<label htmlFor="urgency">Urgency:</label>
				<select id="urgency" name="urgency">
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
				<label htmlFor="zone">Zone:</label>
				<select id="zone" name="zone">
					<option value="high">Zone A</option>
					<option value="medium">Zone B</option>
				</select>
				<label htmlFor="deadline">Deadline:</label>
				<input type="date" id="deadline" name="deadline" />
				<label htmlFor="kind">Kind:</label>
				<input type="text" id="kind" name="kind" />
				<label htmlFor="distributable">Distributable:</label>
				<input type="checkbox" id="distributable" name="distributable" />
				<button type="submit">Add Job</button>
			</form>
			<JobsTable />
			<MachinesTables />
		</>
	);
}
