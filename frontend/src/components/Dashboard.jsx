import { useState } from "react";
import Chart from "react-apexcharts";
import random from "random";

export default function Dashboard() {
	const chart1State = {
		options: {
			chart: {
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
				data: [
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
				],
			},
			{
				name: "Scan",
				data: [
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
					random.int(0, 50),
				],
			},
		],
	};
	const chart2State = {
		options: {
			chart: {
				type: "bar",
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
			},
		},
		series: [
			{
				name: "Conventional",
				data: [
					random.int(50, 100),
					random.int(50, 100),
					random.int(50, 100),
					random.int(50, 100),
					random.int(50, 100),
					random.int(50, 100),
					random.int(50, 100),
				],
			},
			{
				name: "EcoJober",
				data: undefined, // manipulate this later
			},
		],
	};
	// Just set the reduced data based on the conventional data
	chart2State.series[1].data = chart2State.series[0].data.map(
		(value) => value - random.int(0, value)
	);

	const chart3State = {
		options: {
			chart: {
				type: "bar",
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
			},
			fill: {
				type: "solid",
				colors: ["rgba(0, 227, 150, 0.85)"],
			},
		},
		series: [
			{
				name: "gCO2eq",
				// Calculate the data based on
				// the difference between the
				// conventional and ecojober
				// data in the previous chart
				data: chart2State.series[0].data.map(
					(conventional, idx) => conventional - chart2State.series[1].data[idx]
				),
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
			<Chart options={chart1State.options} series={chart1State.series} type="area" />
			<h3>
				CO<sub>2</sub> consumption comparision
			</h3>
			<Chart options={chart2State.options} series={chart2State.series} type="bar" />
			<h3>
				CO<sub>2</sub> saved per day
			</h3>
			<Chart options={chart3State.options} series={chart3State.series} type="bar" />
		</>
	);
}
