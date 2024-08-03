import random from "random";

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

export { chart1State, chart2State, chart3State };
