import AllCharts from "./charts/AllCharts";

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard</h1>
			<p>Dashboard is a place where you can see the data</p>
			<h2>Job metrics</h2>
			<p>Here you can see the job metrics as a graph</p>
			<AllCharts />
		</>
	);
}
