const machinesColumns = [
	{
		title: "Machine ID",
		dataIndex: "machineId",
		key: "machineId",
	},
	{
		title: "Machine Name",
		dataIndex: "machineName",
		key: "machineName",
	},
	{
		title: "Zone",
		dataIndex: "zone",
		key: "zone",
	},
	{
		title: "Capabilities",
		dataIndex: "capabilities",
		key: "capabilities",
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
	},
];

const machinesData = [
	{
		key: "1",
		machineId: "1",
		machineName: "Printer 1",
		zone: "Zone A",
		capabilities: "Print, Scan",
		status: "Ready",
	},
	{
		key: "2",
		machineId: "2",
		machineName: "Printer 2",
		zone: "Zone B",
		capabilities: "Print, Scan",
		status: "Not Ready",
	},
];

export { machinesColumns, machinesData };
