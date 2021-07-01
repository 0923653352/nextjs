import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart() {
	const data = {
		labels: [
			'อุณหภูมิ (c)',
			'ความชื้นอากาศ (%)',
			'ความชื้นในดิน (%)',
			'เเสง (lux)',
			'คุณภาพน้ำ (PH)',
			'ระดับน้ำ (mm)',
		],
		datasets: [
			{
				// label: 'sales for 2020 (M)',
				data: [23, 50, 25, 990, 55, 16],
			},
		],
	};

	return <Line data={data} />;
}
