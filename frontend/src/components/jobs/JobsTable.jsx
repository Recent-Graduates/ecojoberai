import { Typography } from "antd";
const { Title } = Typography;
import { Table } from "antd";
import { jobsColumns } from "./JobsStates";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JobsTable() {
	const [jobsData, setJobsData] = useState([]);
	const [loading, setloading] = useState(true);

	const fetchJobs = async () => {
		try {
			const response = await axios.get(
				"https://ecojoberai-backend-adxywvifka-el.a.run.app/api/v1/jobs/"
			);
			const sortedData = response.data.sort((a, b) => {
				const urgencyOrder = { high: 1, medium: 2, low: 3 };
				return urgencyOrder[a.urgency.toLowerCase()] - urgencyOrder[b.urgency.toLowerCase()];
			});
			setJobsData(sortedData);
			setloading(false);
		} catch (error) {
			console.error("Failed to fetch jobs data:", error);
		}
	};

	useEffect(() => {
		fetchJobs();
		const interval = setInterval(fetchJobs, 10000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Title level={2}>Jobs</Title>

			<Table
				columns={jobsColumns}
				dataSource={jobsData}
				loading={loading}
				pagination={{ pageSize: 5 }}
				rowKey={"jobId"}
			/>
		</>
	);
}
