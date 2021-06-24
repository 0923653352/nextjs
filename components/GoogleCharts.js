import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

export default function GoogleCharts() {
	return (
		<Chart
			width={'500px'}
			height={'300px'}
			chartType="GeoChart"
			data={[
				['Country', 'Popularity'],
				['Germany', 200],
				['United States', 300],
				['Brazil', 400],
				['Canada', 500],
				['France', 600],
				['RU', 700],
			]}
			mapsApiKey="YOUR_KEY_HERE"
			rootProps={{ 'data-testid': '1' }}
		/>
	);
}
// render(<GoogleCharts />, document.querySelector("#root"));
