import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
	//maps/transforms dataPoint array to array of numbers
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	//Math.max requires standalone numbers, so spread operator helps us
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<div className="chart">
			{props.dataPoints.map(dataPoint => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
