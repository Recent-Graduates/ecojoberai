import { Typography } from "antd";
const { Title } = Typography;
import { Table } from "antd";
import { jobsColumns, jobsData } from "./JobsStates";

export default function JobsTable() {
	return (
		<>
			<Title level={2}>Jobs</Title>
			<Table columns={jobsColumns} dataSource={jobsData} pagination={false} />
		</>
	);
}
