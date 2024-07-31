import { useState } from "react";
import Chart from "react-apexcharts";

export default function Dashboard() {
	const state = {
		options: {
			chart: {
				height: 280,
				type: "area",
			},
			dataLabels: {
				enabled: false,
			},

			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0.9,
					stops: [0, 90, 100],
				},
			},
			xaxis: {
				categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
			},
		},
		series: [
			{
				name: "Print",
				data: [45, 52, 38, 45, 19, 23, 2],
			},
			{
				name: "Scan",
				data: [40, 10, 20, 50, 5, 18, 9],
			},
		],
	};

	return (
		<>
			<h1>Dashboard</h1>
			<p>Dashboard is a place where you can see the data</p>
			<h2>Job metrics</h2>
			<p>Here you can see the job metrics as a graph</p>
			<h3>Print vs Scan Jobs</h3>
			<Chart options={state.options} series={state.series} width="500" type="area" />
		</>
	);
}
