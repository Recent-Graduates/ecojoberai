# Backend (Python)

The backend exposes the following endpoints

## Jobs APIs

### Get all Jobs

```
GET /api/vi/jobs
```

```json
[
	{
		"jobId": "1",
		"urgency": "High",
		"originatingZone": "Zone A",
		"creationTime": "2024-06-15 04:05:12",
		"deadline": "2024-06-15 22:25:11",
		"scheduledTime": null,
		"kind": "Print",
		"distributable": "No",
		"status": "Scheduling in progress"
	},
	{
		"jobId": "2",
		"urgency": "Medium",
		"originatingZone": "Zone B",
		"creationTime": "2024-06-20 11:15:12",
		"deadline": "2024-06-20 21:51:15",
		"scheduledTime": null,
		"kind": "Print",
		"distributable": "No",
		"status": "Created"
	},
	{
		"jobId": "3",
		"urgency": "Low",
		"originatingZone": "Zone B",
		"creationTime": "2024-06-25 10:05:12",
		"deadline": "2024-06-25 22:55:15",
		"scheduledTime": "2024-06-25 20:15:00",
		"kind": "Print",
		"distributable": "No",
		"status": "Scheduled"
	}
]
```

### Get a Job by jobId

```
GET /api/v1/jobs/1
```

```json
{
	"jobId": "1",
	"urgency": "High",
	"originatingZone": "Zone A",
	"creationTime": "2024-06-15 04:05:12",
	"deadline": "2024-06-15 22:25:11",
	"scheduledTime": null,
	"kind": "Print",
	"distributable": "No",
	"status": "Scheduling in progress"
}
```

### Create a new Job

```
POST /api/v1/jobs
```

```json
{
	"jobId": "15",
	"urgency": "Low",
	"originatingZone": "Zone A",
	"creationTime": "2024-06-15 04:05:55",
	"deadline": "2024-06-15 22:25:44",
	"scheduledTime": null,
	"kind": "Print",
	"distributable": "No",
	"status": "Created"
}
```

## Machines APIs

### Get all Machines

```
GET /api/v1/machines
```

```json
[
	{
		"machineId": "1",
		"machineName": "Printer 1",
		"zone": "Zone A",
		"capabilities": "Print, Scan",
		"status": "Ready"
	},
	{
		"machineId": "2",
		"machineName": "Printer 2",
		"zone": "Zone B",
		"capabilities": "Print, Scan",
		"status": "Not Ready"
	}
]
```

### Get a Machine by machineId

```
GET /api/v1/machines/1
```

```json
{
	"machineId": "1",
	"machineName": "Printer 1",
	"zone": "Zone A",
	"capabilities": "Print, Scan",
	"status": "Ready"
}
```

### Create a new Machine

```
POST /api/v1/machines
```

```json
{
	"machineId": "20",
	"machineName": "Printer 5",
	"zone": "Zone B",
	"capabilities": "Print",
	"status": "Ready"
}
```
