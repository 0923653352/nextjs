import React, { Component } from 'react';
import {
	Map,
	InfoWindow,
	Marker,
	GoogleApiWrapper,
	Polygon,
} from 'google-maps-react';

class Hero2 extends Component {
	render() {
		const triangleCoords = [
			{ lat: 13.75827, lng: 100.62234 },
			{ lat: 13.74605, lng: 100.6127 },
			{ lat: 13.74318, lng: 100.63121 },
			{ lat: 13.75827, lng: 100.62234 },
		];
		return (
			<div style={{ width: '100%', height: '250px', position: 'relative' }}>
				<Map google={this.props.google} zoom={14}  initialCenter={{lat: 13.75284, lng: 100.61871}}>
					<Polygon
						paths={triangleCoords}
						strokeColor="#0000FF"
						strokeOpacity={0.8}
						strokeWeight={2}
						fillColor="#0000FF"
						fillOpacity={0.35}
					/>
					<Marker
						onClick={this.onMarkerClick}
						name={'Current location'}
						position={{ lat: 13.75284, lng: 100.61871 }}
					/>
					<InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
				</Map>
			</div>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: 'AIzaSyA-NoP20OejFNd_gxMizvmRCDHwRPg0gJI&callback',
})(Hero2);
