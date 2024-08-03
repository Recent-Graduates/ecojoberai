import Chart from "react-apexcharts";
import { chart1State, chart2State, chart3State } from "./ChartStates";
import { Col, Row } from "antd";

export default function AllCharts() {
	const commonOptions = {
		chartHeight: 350,
		chartWidth: "100%",
		colXsSizeForCharts: 23,
		colMdSizeForCharts: 11,
	};
	return (
		<>
			<Row justify="space-evenly">
				<Col xs={commonOptions.colXsSizeForCharts} md={commonOptions.colMdSizeForCharts}>
					<h3>
						CO<sub>2</sub> consumption comparision
					</h3>
					<Chart
						options={chart2State.options}
						series={chart2State.series}
						type="bar"
						height={commonOptions.chartHeight}
						width={commonOptions.chartWidth}
					/>
				</Col>
				<Col xs={commonOptions.colXsSizeForCharts} md={commonOptions.colMdSizeForCharts}>
					<h3>
						CO<sub>2</sub> saved per day
					</h3>
					<Chart
						options={chart3State.options}
						series={chart3State.series}
						type="bar"
						height={commonOptions.chartHeight}
						width={commonOptions.chartWidth}
					/>
				</Col>
				<Col xs={commonOptions.colXsSizeForCharts} md={commonOptions.colMdSizeForCharts}>
					<h3>Print vs Scan Jobs</h3>
					<Chart
						options={chart1State.options}
						series={chart1State.series}
						type="area"
						height={commonOptions.chartHeight}
						width={commonOptions.chartWidth}
					/>
				</Col>
			</Row>
		</>
	);
}
