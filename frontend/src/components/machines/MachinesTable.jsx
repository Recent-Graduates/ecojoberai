import { Table, Typography } from "antd";
const { Title } = Typography;
import { machinesColumns, machinesData } from "./MachinesStates";

export default function MachinesTables() {
	return (
		<>
			<Title level={2}>Machines</Title>
			<Table columns={machinesColumns} dataSource={machinesData} pagination={false} />
		</>
	);
}
