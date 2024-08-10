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
		title: "Creation time",
		dataIndex: "creationTime",
		key: "creationTime",
		render: (text) => text.split(".")[0].replace("T", " "),
	},
	{
		title: "Deadline",
		dataIndex: "deadline",
		key: "deadline",
		render: (text) => text.split(".")[0].replace("T", " "),
	},
	{
		title: "Scheduled time",
		dataIndex: "scheduledTime",
		key: "scheduledTime",
		render: (text) => text.split(".")[0].replace("T", " "),
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
		render: (text) => (text ? "Yes" : "No"),
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
		urgency: "Medium",
		originatingZone: "IN-NO",
		creationTime: "2024-06-20 11:15:12",
		deadline: "2024-06-20 21:51:15",
		scheduledTime: null,
		kind: "Print",
		distributable: "No",
		status: "Created",
	},
	{
		key: "2",
		jobId: "2",
		urgency: "High",
		originatingZone: "IN-SO",
		creationTime: "2024-06-15 04:05:12",
		deadline: "2024-06-15 22:25:11",
		scheduledTime: null,
		kind: "Print",
		distributable: "No",
		status: "Scheduling in progress",
	},
	{
		key: "2",
		jobId: "2",
		urgency: "Low",
		originatingZone: "IN-SO",
		creationTime: "2024-06-25 10:05:12",
		deadline: "2024-06-25 22:55:15",
		scheduledTime: "2024-06-25 20:15:00",
		kind: "Print",
		distributable: "No",
		status: "Scheduled",
	},
	{
		key: "2",
		jobId: "2",
		urgency: "Low",
		originatingZone: "IN-NO",
		creationTime: "2024-07-13 10:05:12",
		deadline: "2024-07-13 22:55:15",
		scheduledTime: "2024-07-13 21:20:00",
		kind: "Print",
		distributable: "No",
		status: "Completed",
	},
];

export { jobsColumns, jobsData };
