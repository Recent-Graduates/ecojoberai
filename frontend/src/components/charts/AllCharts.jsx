import Chart from "react-apexcharts";
import { chart1State, chart2State, chart3State } from "./ChartStates";

export default function AllCharts() {
	return (
		<>
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
