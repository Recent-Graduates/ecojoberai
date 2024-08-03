const jobsColumns = [
	{
		title: "Job ID",
		dataIndex: "jobId",
		key: "jobId",
	},
	{
		title: "Urgency",
		dataIndex: "urgency",
		key: "urgency",
	},
	{
		title: "Originating zone",
		dataIndex: "originatingZone",
		key: "originatingZone",
	},
	{
		title: "Deadline",
		dataIndex: "deadline",
		key: "deadline",
	},
	{
		title: "Kind",
		dataIndex: "kind",
		key: "kind",
	},
	{
		title: "Distributable",
		dataIndex: "distributable",
		key: "distributable",
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
	},
];

const jobsData = [
	{
		key: "1",
		jobId: "1",
		urgency: "High",
		originatingZone: "Zone A",
		deadline: "2024-06-15",
		kind: "Print",
		distributable: "No",
		status: "Scheduling in progress",
	},
	{
		key: "2",
		jobId: "2",
		urgency: "Medium",
		originatingZone: "Zone B",
		deadline: "2024-06-20",
		kind: "Print",
		distributable: "No",
		status: "Pending",
	},
	{
		key: "3",
		jobId: "3",
		urgency: "Low",
		originatingZone: "Zone B",
		deadline: "2024-06-25",
		kind: "Print",
		distributable: "No",
		status: "Scheduled",
	},
];

export { jobsColumns, jobsData };
